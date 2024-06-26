import type * as colorConvert from "color-convert";

import Color from "color";

import { regexHexColor } from "@/const/colors";

export type ColorMode = Pick<typeof colorConvert, "rgb" | "hsl" | "cmyk" | "hsv" | "hwb">;

export function resolveValidColor(color: string, fallback = "#000000") {
  if (regexHexColor.test(color)) return color;

  return fallback;
}

export const colorModes: Record<
  keyof ColorMode,
  {
    channels: { label: string; min: number; max: number }[];
    converter: (color: string) => number[];
  }
> = {
  rgb: {
    channels: [
      { label: "Red", min: 0, max: 255 },
      { label: "Green", min: 0, max: 255 },
      { label: "Blue", min: 0, max: 255 },
    ],
    converter: (color) => Color(color).rgb().array(),
  },
  hsl: {
    channels: [
      { label: "Hue", min: 0, max: 360 },
      { label: "Saturation", min: 0, max: 100 },
      { label: "Lightness", min: 0, max: 100 },
    ],
    converter: (color) => Color(color).hsl().array(),
  },
  cmyk: {
    channels: [
      { label: "Cyan", min: 0, max: 100 },
      { label: "Magenta", min: 0, max: 100 },
      { label: "Yellow", min: 0, max: 100 },
      { label: "Black", min: 0, max: 100 },
    ],
    converter: (color) => Color(color).cmyk().array(),
  },
  hsv: {
    channels: [
      { label: "Hue", min: 0, max: 360 },
      { label: "Saturation", min: 0, max: 100 },
      { label: "Value", min: 0, max: 100 },
    ],
    converter: (color) => Color(color).hsv().array(),
  },
  hwb: {
    channels: [
      { label: "Hue", min: 0, max: 360 },
      { label: "Whiteness", min: 0, max: 100 },
      { label: "Blackness", min: 0, max: 100 },
    ],
    converter: (color) => Color(color).hwb().array(),
  },
};
