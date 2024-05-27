import chroma from "chroma-js";

function generateHexColor() {
  return chroma.random().hex();
}

function getContrastColor(hexColor: string, attempts = 0, maxAttempts = 30) {
  if (attempts >= maxAttempts) {
    console.warn("Max attempts reached, returning last generated color.");

    return generateHexColor();
  }

  const generatedHexColor = generateHexColor();
  const contrastRatio = chroma.contrast(hexColor, generatedHexColor);

  if (contrastRatio >= 4.5) {
    return generatedHexColor;
  } else {
    return getContrastColor(hexColor);
  }
}

export function randomColorGenerate() {
  const baseColor = generateHexColor();
  const baseColorContrast = getContrastColor(baseColor);

  return { baseColor, baseColorContrast };
}
