import { WORD_FONT, WORD_BOX_H, WORD_BOX_PAD } from "@/lib/game/config";
import type { GameState, WordEntity } from "@/lib/game/types";

export function drawScene(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  view: { width: number; height: number }
) {
  // Clear
  ctx.save();
  ctx.fillStyle = "#0e0f14";
  ctx.fillRect(0, 0, view.width, view.height);
  ctx.restore();

  // Grid subtle
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = "#ffffff";
  for (let x = 0; x <= view.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, view.height);
    ctx.stroke();
  }
  for (let y = 0; y <= view.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(view.width, y);
    ctx.stroke();
  }
  ctx.restore();

  // Words
  ctx.font = WORD_FONT;
  ctx.textBaseline = "top";
  for (const w of state.words) {
    drawWord(ctx, w, state);
  }

  // HUD overlay
  drawHUD(ctx, state, view);
}

function drawWord(ctx: CanvasRenderingContext2D, w: WordEntity, s: GameState) {
  const isNext =
    w.kind === "good" && w.text === s.targetSequence[s.seqIndex].word;
  const textW = ctx.measureText(w.text).width;
  // box
  ctx.save();
  ctx.fillStyle =
    w.kind === "bad"
      ? "rgba(255, 77, 109, 0.2)"
      : isNext
      ? "rgba(255, 215, 0, 0.22)"
      : "rgba(56, 199, 125, 0.18)";
  ctx.strokeStyle =
    w.kind === "bad"
      ? "rgba(255, 77, 109, 0.8)"
      : isNext
      ? "rgba(255, 215, 0, 0.85)"
      : "rgba(56, 199, 125, 0.8)";
  ctx.lineWidth = isNext ? 2 : 1;
  roundRect(ctx, w.x - WORD_BOX_PAD, w.y - WORD_BOX_PAD, textW + WORD_BOX_PAD * 2, WORD_BOX_H, 6);
  ctx.stroke();
  ctx.fill();
  // text
  ctx.fillStyle = "#e6e7eb";
  ctx.fillText(w.text, w.x, w.y);
  ctx.restore();
}

function drawHUD(ctx: CanvasRenderingContext2D, s: GameState, view: { width: number; height: number }) {
  ctx.save();
  // Top bar
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(0, 0, view.width, 36);
  ctx.fillStyle = "#e6e7eb";
  ctx.font = "14px system-ui";
  ctx.textBaseline = "middle";
  ctx.fillText(`Score: ${s.score}`, 10, 18);
  ctx.fillText(`Vies: ${s.lives}`, 110, 18);
  ctx.fillText(`Buffer: ${s.buffer}`, 200, 18);
  // Sequence
  let x = 360;
  ctx.fillText("Séquence:", x, 18);
  x += 80;
  for (let i = 0; i < s.targetSequence.length; i++) {
    const token = s.targetSequence[i].word;
    const isNext = i === s.seqIndex;
    const w = ctx.measureText(token).width;
    ctx.fillStyle = isNext ? "#ffd700" : "#e6e7eb";
    ctx.fillText(token, x, 18);
    if (isNext) {
      ctx.strokeStyle = "rgba(255,215,0,0.8)";
      ctx.strokeRect(x - 4, 8, w + 8, 20);
    }
    x += w + 16;
  }
  // Game over overlay handled by React component
  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
