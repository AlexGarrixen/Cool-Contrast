import type * as colorConvert from "color-convert";

import Color from "color";

export const contrastGuidelines = {
  AALevel: {
    normalText: 4.5,
    largeText: 3.1,
  },
  AAALevel: {
    normalText: 7.1,
    largeText: 4.5,
  },
};

interface ColorModeInput {
  channels: Record<string, number>;
  mode: keyof typeof colorConvert;
}

interface TestResult {
  passAANormalText: boolean;
  passAALargeText: boolean;
  passAAANormalText: boolean;
  passAAALargeText: boolean;
}

type Level = "AA" | "AAA";

type ColorInput = string | ColorModeInput;

export function wcagContrastTest(color1: ColorInput, color2: ColorInput): TestResult {
  if (!isValidColor(color1) || !isValidColor(color2)) throw new Error("Invalid color");

  const color1Input = createColor(color1);
  const color2Input = createColor(color2);
  const contrast = color1Input.contrast(color2Input);
  const passAANormalText = testContrastForNormalText(contrast, "AA");
  const passAALargeText = testContrastForLargeText(contrast, "AA");
  const passAAANormalText = testContrastForNormalText(contrast, "AAA");
  const passAAALargeText = testContrastForLargeText(contrast, "AAA");

  return {
    passAANormalText,
    passAALargeText,
    passAAANormalText,
    passAAALargeText,
  };
}

function testContrastForNormalText(contrast: number, level: Level) {
  if (level === "AA") return contrast >= contrastGuidelines.AALevel.normalText;

  return contrast >= contrastGuidelines.AAALevel.normalText;
}

function testContrastForLargeText(contrast: number, level: Level) {
  if (level === "AA") return contrast >= contrastGuidelines.AALevel.largeText;

  return contrast >= contrastGuidelines.AAALevel.largeText;
}

function createColor(colorInput: ColorInput) {
  if (typeof colorInput === "string") return Color(colorInput);

  return Color(colorInput.channels, colorInput.mode);
}

function isValidColor(colorInput: ColorInput): boolean {
  try {
    createColor(colorInput);

    return true;
  } catch (err) {
    return false;
  }
}
