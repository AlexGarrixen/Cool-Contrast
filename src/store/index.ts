import { atom } from "jotai";
import Color from "color";

import { wcagContrastTest, contrastGuidelines } from "@/lib/wcag-text-contrast";

export const background = atom<string>("#261893");

export const foreground = atom<string>("#DBFF5E");

export const selectedFgSuggestion = atom("");

export const selectedBgSuggestion = atom("");

const colors = atom((get) => {
  const bg = get(background);
  const fg = get(foreground);

  return { bg, fg };
});

const selectedSuggestionsColors = atom((get) => {
  const bgSuggestion = get(selectedBgSuggestion);
  const fgSuggestion = get(selectedFgSuggestion);

  return { bgSuggestion, fgSuggestion };
});

export const swapColors = atom(null, (get, set) => {
  const { bg, fg } = get(colors);

  set(background, fg);
  set(foreground, bg);
});

export const wcagLevelsResult = atom((get) => {
  const { bg, fg } = get(colors);
  const { bgSuggestion, fgSuggestion } = get(selectedSuggestionsColors);
  const resolvedBg = bgSuggestion || bg;
  const resolvedFg = fgSuggestion || fg;

  return wcagContrastTest(resolvedBg, resolvedFg);
});

export const contrastRelation = atom((get) => {
  const { bg, fg } = get(colors);
  const { bgSuggestion, fgSuggestion } = get(selectedSuggestionsColors);
  const resolvedBg = bgSuggestion || bg;
  const resolvedFg = fgSuggestion || fg;
  const contrast = Color(resolvedBg).contrast(Color(resolvedFg));
  let feedback: "poor" | "good" | "very-good" = "poor";

  if (contrast > contrastGuidelines.AAALevel.largeText) feedback = "good";
  if (contrast > contrastGuidelines.AAALevel.normalText) feedback = "very-good";

  return { contrast, feedback };
});

export const clearSuggestionsPreselected = atom(null, (get, set) => {
  set(selectedBgSuggestion, "");
  set(selectedFgSuggestion, "");
});

export const contentTab = atom<"landing" | "elements">("landing");

export const showDialogMoreDetails = atom(false);
