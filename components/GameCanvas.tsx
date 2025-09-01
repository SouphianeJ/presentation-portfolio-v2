"use client";
import React, { useEffect, useRef, useState } from "react";
import { drawScene } from "@/lib/render/canvas2d";
import {
  createInitialState,
  update,
  tryReset,
  type GameState,
  type InputEvent,
} from "@/lib/game/logic";
import { GAME_HEIGHT, GAME_WIDTH } from "@/lib/game/config";

type HUDSnapshot = {
  score: number;
  lives: number;
  buffer: string;
  seqIndex: number;
  targetSequence: string[];
  status: "running" | "over";
};

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const stateRef = useRef<GameState>(createInitialState());
  const inputsRef = useRef<InputEvent[]>([]);
  const [hud, setHud] = useState<HUDSnapshot>(() => snapshot(stateRef.current));

  const handleRestart = () => {
    stateRef.current = tryReset(stateRef.current);
    setHud(snapshot(stateRef.current));
  };

  // DPR scaling & resize
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      // Fit into parent width, keep aspect ratio (GAME_WIDTH x GAME_HEIGHT)
      const parent = canvas.parentElement!;
      const maxW = parent.clientWidth;
      const targetW = Math.min(maxW, GAME_WIDTH);
      const scale = targetW / GAME_WIDTH;
      const cssW = Math.round(GAME_WIDTH * scale);
      const cssH = Math.round(GAME_HEIGHT * scale);
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
      // Reset font after transform
      ctx.font = "16px system-ui";
      ctx.textBaseline = "top";
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    const onDpr = () => resize();
    window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener?.("change", onDpr);
    return () => {
      ro.disconnect();
      window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).removeEventListener?.("change", onDpr);
    };
  }, []);

  // Keyboard input
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (s.status === "over") return;
      if (e.key === "Backspace") {
        inputsRef.current.push({ kind: "backspace" });
        e.preventDefault();
        return;
      }
      if (e.key === "Enter") {
        inputsRef.current.push({ kind: "submit" });
        return;
      }
      // Accept single visible characters (letters incl. accents, numbers)
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        inputsRef.current.push({ kind: "char", payload: e.key });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Pointer/touch selection (hit-test on words)
  useEffect(() => {
    const canvas = canvasRef.current!;
    const onPointerDown = (evt: PointerEvent) => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((evt.clientX - rect.left) / rect.width) * GAME_WIDTH;
      const y = ((evt.clientY - rect.top) / rect.height) * GAME_HEIGHT;
      const s = stateRef.current;
      if (s.status === "over") return;
      // Measure and find first word whose bounding box contains (x, y)
      // Assume ~24px height per word line box
      const H = 24;
      // Check top-most first: reverse by y descending
      const words = [...s.words].sort((a, b) => b.y - a.y);
      for (const w of words) {
        const wWidth = ctx.measureText(w.text).width + 8; // padding
        const hit =
          x >= w.x &&
          x <= w.x + wWidth &&
          y >= w.y - 4 && // small top tolerance
          y <= w.y + H;
        if (hit) {
          inputsRef.current.push({ kind: "pointerSelect", payload: { id: w.id } });
          break;
        }
      }
    };
    canvas.addEventListener("pointerdown", onPointerDown);
    return () => canvas.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // RAF loop (fixed-step with accumulator)
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const FIXED = 1000 / 60; // ~16.666ms

    const tick = () => {
      const now = performance.now();
      let dt = now - last;
      last = now;
      if (dt > 50) dt = 50; // clamp
      acc += dt;

      while (acc >= FIXED) {
        const inputs = inputsRef.current;
        inputsRef.current = [];
        stateRef.current = update(stateRef.current, FIXED, inputs);
        acc -= FIXED;
      }

      const ctx = ctxRef.current;
      if (ctx) {
        drawScene(ctx, stateRef.current, { width: GAME_WIDTH, height: GAME_HEIGHT });
      }

      // Update HUD every frame (cheap)
      setHud(snapshot(stateRef.current));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          background: "#0e0f14",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,.4)",
        }}
      />
      {hud.status === "over" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.55)",
            borderRadius: 12,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 12, fontSize: 24, fontWeight: 600, color: "#ffd700" }}>
              Game Over
            </div>
            <button
              onClick={handleRestart}
              style={{
                padding: "8px 16px",
                fontSize: 16,
                fontWeight: 600,
                background: "#ffd700",
                color: "#000",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Recommencer
            </button>
          </div>
        </div>
      )}
      <div style={{ marginTop: 8, fontSize: 14, opacity: 0.85 }}>
        <b>Score:</b> {hud.score} &nbsp;•&nbsp; <b>Vies:</b> {hud.lives} &nbsp;•&nbsp;{" "}
        <b>Buffer:</b> “{hud.buffer}”
        <div style={{ marginTop: 4 }}>
          <b>Séquence:</b>{" "}
          {hud.targetSequence.map((w, i) => (
            <span
              key={w + i}
              style={{
                padding: "2px 6px",
                marginRight: 6,
                borderRadius: 6,
                background: i === hud.seqIndex ? "rgba(255,215,0,.25)" : "rgba(255,255,255,.08)",
                border: i === hud.seqIndex ? "1px solid rgba(255,215,0,.6)" : "1px solid rgba(255,255,255,.12)",
              }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function snapshot(s: GameState): HUDSnapshot {
  return {
    score: s.score,
    lives: s.lives,
    buffer: s.buffer,
    seqIndex: s.seqIndex,
    targetSequence: s.targetSequence,
    status: s.status,
  };
}
