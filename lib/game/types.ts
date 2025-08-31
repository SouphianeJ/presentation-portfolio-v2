export type WordKind = "good" | "bad";

export interface WordEntity {
  id: string;
  text: string;
  x: number;
  y: number;
  vy: number; // px/s
  kind: WordKind;
}

export type GameStatus = "running" | "over";

export interface GameState {
  timeMs: number;
  score: number;
  lives: number;
  words: WordEntity[];
  buffer: string;
  status: GameStatus;
  seqIndex: number; // index dans targetSequence (mot attendu)
  targetSequence: string[];
  lastSpawnMs: number;
  nextSpawnJitter: number; // ms à ajouter à l'interval
}

export type InputEvent =
  | { kind: "char"; payload: string }
  | { kind: "backspace" }
  | { kind: "submit" }
  | { kind: "pointerSelect"; payload: { id: string } };
