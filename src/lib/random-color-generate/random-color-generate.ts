import chroma from "chroma-js";

import { fallbackColorPairs } from "./fallback-color-pairs";

function generateHexColor() {
  return chroma.random().hex();
}

function getRandomColorPair() {
  const idx = Math.floor(Math.random() * fallbackColorPairs.length);

  return fallbackColorPairs[idx];
}

function getContrastColor(hexColor: string, attempts = 0, maxAttempts = 100) {
  if (attempts >= maxAttempts) {
    console.warn("Max attempts reached, returning last generated color.");

    return undefined;
  }

  const generatedHexColor = generateHexColor();
  const contrastRatio = chroma.contrast(hexColor, generatedHexColor);

  if (contrastRatio >= 4.5) {
    return generatedHexColor;
  } else {
    return getContrastColor(hexColor, attempts + 1, maxAttempts);
  }
}

export function randomColorGenerate() {
  let baseColor = generateHexColor();
  let baseColorContrast = getContrastColor(baseColor);

  if (!baseColorContrast) {
    const randomColorPair = getRandomColorPair();

    baseColor = randomColorPair.background;
    baseColorContrast = randomColorPair.foreground;
  }

  return { baseColor, baseColorContrast };
}
