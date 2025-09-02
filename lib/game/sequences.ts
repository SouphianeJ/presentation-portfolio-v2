import type { SequenceStep } from "./types";

export const SEQUENCES: SequenceStep[][] = [
  [
    { word: "rouge", distractors: ["noir", "blanc", "orange"] },
    { word: "vert", distractors: ["cyan", "magenta", "marron"] },
    { word: "bleu", distractors: ["sable", "olive", "jaune"] },
  ],
  [
    { word: "rose", distractors: ["noir", "gris", "violet"] },
    { word: "jaune", distractors: ["rouge", "vert", "bleu"] },
    { word: "vert", distractors: ["orange", "marron", "cyan"] },
  ],
  [
    { word: "gris", distractors: ["noir", "blanc", "sable"] },
    { word: "bleu", distractors: ["cyan", "magenta", "jaune"] },
    { word: "violet", distractors: ["rose", "vert", "orange"] },
  ],
  [
    { word: "bleu roi", distractors: ["gris", "bleu", "vert", "jaune"] },
    { word: "bleu marine", distractors: ["vert", "violet", "gris", "bleu"] },
    { word: "bleu ciel", distractors: ["rose", "orange", "noir", "blanc"] },
  ],
];

