export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 450;

// Gameplay
export const MAX_LIVES = 3;
export const POINTS_PER_STEP = 10; // points par bon mot (dans l'ordre)

// Chute
export const BASE_FALL_PX_PER_S = 90;
export const FALL_SPEED_VARIANCE = 40;

// Spawn
export const SPAWN_INTERVAL_MS = 3000; // base
export const SPAWN_JITTER_MS = 600; // +/- aléatoire
export const GOOD_PROBABILITY = 0.6; // proba de spawn d'un mot "good"
export const NEXT_TARGET_BIAS = 0.55; // si "good", chance de forcer le prochain mot attendu

// Rendu
export const WORD_FONT = "16px system-ui";
export const WORD_BOX_PAD = 4;
export const WORD_BOX_H = 24;
export const COLOR_BG = "#0e0f14";
export const COLOR_TEXT = "#e6e7eb";
