import Color from "color";
import chroma from "chroma-js";
import _uniqWith from "lodash.uniqwith";

import { contrastGuidelines } from "@/lib/wcag-text-contrast";

interface SuggestionResult {
  fg: string;
  bg: string;
  contrast: string;
  id: string;
}

function createColorScale(baseColor: string) {
  const result: string[] = [];
  const scale = chroma
    .scale([chroma(baseColor).brighten(2), baseColor, chroma(baseColor).darken(2)])
    .domain([0, 500]);

  for (let i = 50; i < 500; i += 100) {
    const color = scale(i).hex();

    result.push(color);
  }

  return result;
}

const createHash = () => Math.random().toString(16).slice(2);

function getBestScalesContrast(scaleA: string[], scaleB: string[]) {
  const results: SuggestionResult[] = [];

  scaleA.forEach((scaleColorA) => {
    scaleB.forEach((scaleColorB) => {
      const contrast = Color(scaleColorA).contrast(Color(scaleColorB));

      if (contrast > contrastGuidelines.AAALevel.normalText) {
        results.push({
          bg: scaleColorA,
          fg: scaleColorB,
          contrast: contrast.toFixed(2),
          id: createHash(),
        });
      }
    });
  });

  return results;
}

export function createContrastSuggestions(bg: string, fg: string) {
  const scaleBg = createColorScale(bg);
  const scaleFg = createColorScale(fg);
  let colors: SuggestionResult[] = [];

  colors = [...getBestScalesContrast(scaleBg, scaleFg)];

  if (colors.length === 0) {
    const fallbackScale = ["#000000", "#ffffff"];

    colors = [
      ...colors,
      ...getBestScalesContrast(scaleBg, fallbackScale),
      ...getBestScalesContrast(scaleFg, fallbackScale),
    ];
  }

  colors = colors.sort((a, b) => parseFloat(a.contrast) - parseFloat(b.contrast));

  return _uniqWith(
    colors,
    (objA: SuggestionResult, objB: SuggestionResult) => objA.fg === objB.fg && objA.bg === objB.bg,
  );
}
