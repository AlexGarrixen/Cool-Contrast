import { atom } from "jotai";
import Color from "color";

import { wcagContrastTest, contrastGuidelines } from "@/lib/wcag-text-contrast";

export const background = atom<string>("#FDFBF6");

export const foreground = atom<string>("#242422");

const colors = atom((get) => {
  const bg = get(background);
  const fg = get(foreground);

  return { bg, fg };
});

export const swapColors = atom(null, (get, set) => {
  const { bg, fg } = get(colors);

  set(background, fg);
  set(foreground, bg);
});

export const wcagLevelsResult = atom((get) => {
  const { bg, fg } = get(colors);

  return wcagContrastTest(bg, fg);
});

export const contrastRelation = atom((get) => {
  const { bg, fg } = get(colors);
  const contrast = Color(bg).contrast(Color(fg));
  let feedback: "poor" | "good" | "very-good" = "poor";

  if (contrast > contrastGuidelines.AAALevel.largeText) feedback = "good";
  if (contrast > contrastGuidelines.AAALevel.normalText) feedback = "very-good";

  return { contrast, feedback };
});

export const contentTab = atom<"landing" | "elements">("landing");
