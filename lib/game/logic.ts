import {
  BASE_FALL_PX_PER_S,
  FALL_SPEED_VARIANCE,
  MAX_LIVES,
  POINTS_PER_STEP,
  SPAWN_INTERVAL_MS,
  SPAWN_JITTER_MS,
  GOOD_PROBABILITY,
  NEXT_TARGET_BIAS,
  GAME_HEIGHT,
  GAME_WIDTH,
} from "./config";
import { SEQUENCES } from "./sequences";
import type { GameState, InputEvent, WordEntity } from "./types";
export type { GameState, InputEvent } from "./types";

let _id = 0;
const newId = () => String(++_id);

export function createInitialState(): GameState {
  const sequences = shuffleArray(SEQUENCES);
  const [first, ...rest] = sequences;
  return {
    timeMs: 0,
    score: 0,
    lives: MAX_LIVES,
    words: [],
    buffer: "",
    status: "running",
    seqIndex: 0,
    targetSequence: first,
    sequenceQueue: rest,
    lastSpawnMs: 0,
    nextSpawnJitter: randInRange(-SPAWN_JITTER_MS, SPAWN_JITTER_MS),
  };
}

export function tryReset(s: GameState): GameState {
  if (s.status !== "over") return s;
  return createInitialState();
}

// Boucle d'update (fixed-step)
export function update(prev: GameState, dtMs: number, inputs: InputEvent[]): GameState {
  if (prev.status === "over") return prev;
  let s = { ...prev, timeMs: prev.timeMs + dtMs };

  // Inputs clavier/pointer
  s = applyInputs(s, inputs);

  // Spawn
  if (shouldSpawn(s)) {
    s = spawnWord(s);
  }

  // Chute
  const dtSec = dtMs / 1000;
  s.words = s.words.map((w) => stepFall(w, dtSec));

  // Sortie d'écran ⇒ vie perdue
  const kept: WordEntity[] = [];
  let lost = 0;
  const nextExpected = s.targetSequence[s.seqIndex].word;
  for (const w of s.words) {
    if (w.y > GAME_HEIGHT + 16) {
      // Penalize only when the missed word was the next expected one.
      if (w.kind === "good" && w.text === nextExpected) {
        lost++;
      }
      // In all cases, drop the word once it exits the screen.
    } else {
      kept.push(w);
    }
  }
  if (lost > 0) {
    s.lives = Math.max(0, s.lives - lost);
  }
  s.words = kept;

  if (s.lives <= 0) {
    s.status = "over";
  }
  return s;
}

export function applyInputs(prev: GameState, inputs: InputEvent[]): GameState {
  let s = { ...prev };
  for (const e of inputs) {
    if (e.kind === "char") {
      const ch = normalizeChar(e.payload);
      s.buffer = s.buffer + ch;
    } else if (e.kind === "backspace") {
      s.buffer = s.buffer.slice(0, -1);
    } else if (e.kind === "submit") {
      s = tryMatchByText(s, s.buffer);
      s.buffer = "";
    } else if (e.kind === "pointerSelect") {
      s = tryMatchByPointer(s, e.payload.id);
    }
    if (s.lives <= 0) {
      s.status = "over";
      break;
    }
  }
  return s;
}

function tryMatchByText(state: GameState, text: string): GameState {
  if (!text) return state;
  const s = { ...state };
  const next = s.targetSequence[s.seqIndex].word;
  // On choisit le mot visible le plus proche du bas qui correspond au texte
  const candidate = [...s.words]
    .filter((w) => w.text === text)
    .sort((a, b) => b.y - a.y)[0];
  if (!candidate) return s; // aucun mot avec ce texte

  if (candidate.kind === "good" && candidate.text === next) {
    // bon mot dans l'ordre
    s.score += POINTS_PER_STEP;
    s.seqIndex += 1;
    s.words = s.words.filter((w) => w.id !== candidate.id);
    if (s.seqIndex >= s.targetSequence.length) {
      return advanceSequence(s);
    }
    return s;
  } else {
    // mauvais (faux ou bon mais hors ordre) ⇒ vie --
    s.lives = Math.max(0, s.lives - 1);
    // Retire le mot cliqué/tapé pour feedback immédiat
    s.words = s.words.filter((w) => w.id !== candidate.id);
    return s;
  }
}

function tryMatchByPointer(state: GameState, id: string): GameState {
  const s = { ...state };
  const target = s.words.find((w) => w.id === id);
  if (!target) return s;
  const next = s.targetSequence[s.seqIndex].word;
  if (target.kind === "good" && target.text === next) {
    s.score += POINTS_PER_STEP;
    s.seqIndex += 1;
    s.words = s.words.filter((w) => w.id !== id);
    if (s.seqIndex >= s.targetSequence.length) {
      return advanceSequence(s);
    }
  } else {
    s.lives = Math.max(0, s.lives - 1);
    s.words = s.words.filter((w) => w.id !== id);
  }
  return s;
}

function advanceSequence(state: GameState): GameState {
  const s = { ...state };
  if (s.sequenceQueue.length === 0) {
    s.sequenceQueue = shuffleArray(SEQUENCES);
  }
  const [next, ...rest] = s.sequenceQueue;
  s.targetSequence = next;
  s.sequenceQueue = rest;
  s.seqIndex = 0;
  return s;
}

function shouldSpawn(s: GameState): boolean {
  return s.timeMs - s.lastSpawnMs >= SPAWN_INTERVAL_MS + s.nextSpawnJitter;
}

export function spawnWord(prev: GameState): GameState {
  const s = { ...prev };
  s.lastSpawnMs = s.timeMs;
  s.nextSpawnJitter = randInRange(-SPAWN_JITTER_MS, SPAWN_JITTER_MS);

  const spawnGood = Math.random() < GOOD_PROBABILITY;
  let text: string;
  let kind: "good" | "bad";
  if (spawnGood) {
    // Biais pour faire apparaître le prochain mot attendu
    const useNext = Math.random() < NEXT_TARGET_BIAS;
    if (useNext) {
      text = s.targetSequence[s.seqIndex].word;
    } else {
      // autre mot de la séquence (décoy)
      const pool = s.targetSequence
        .filter((_, i) => i !== s.seqIndex)
        .map((step) => step.word);
      text = pool[(Math.random() * pool.length) | 0] ?? s.targetSequence[s.seqIndex].word;
    }
    kind = "good";
  } else {
    const distractors = s.targetSequence[s.seqIndex].distractors;
    text = distractors[(Math.random() * distractors.length) | 0];
    kind = "bad";
  }

  const vy = BASE_FALL_PX_PER_S + randInRange(-FALL_SPEED_VARIANCE, FALL_SPEED_VARIANCE);
  // X grossièrement aléatoire, marge 20..(width-120) (la largeur réelle est mesurée côté rendu pour le hit-test)
  const x = clamp(20 + Math.random() * (GAME_WIDTH - 140), 10, GAME_WIDTH - 120);

  const w: WordEntity = {
    id: newId(),
    text,
    x,
    y: -10, // start au-dessus du cadre
    vy,
    kind,
  };
  s.words = [...s.words, w];
  return s;
}

export function stepFall(w: WordEntity, dtSec: number): WordEntity {
  return { ...w, y: w.y + w.vy * dtSec };
}

function normalizeChar(c: string): string {
  return c.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function randInRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
