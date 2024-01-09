import Color from "color";
import chroma, { type Scale } from "chroma-js";
import _uniqWith from "lodash.uniqwith";

import { contrastGuidelines } from "@/lib/wcag-text-contrast";

interface SuggestionResult {
  fg: string;
  bg: string;
  contrast: string;
  id: string;
}

interface ColorScaleOpts {
  range?: [number, number];
  stepsDistance?: number;
  startInRange?: number;
  stopInRange?: number;
  direction?: "center" | "start";
}

function isDark(color: string) {
  const luminance = chroma(color).luminance();
  const umbral = 0.2;

  return luminance < umbral;
}

function createColorScale(sourceColor: string, opts?: ColorScaleOpts) {
  const defaultOpts = { range: [0, 500], stepsDistance: 100 } satisfies ColorScaleOpts;
  const { range, startInRange, stopInRange, stepsDistance, direction } = Object.assign(
    defaultOpts,
    opts,
  );
  const [minRange, maxRange] = range;
  const numSteps = Math.ceil(maxRange / stepsDistance);
  let scale: Scale;

  if (direction === "center") {
    const steps = Math.floor(numSteps / 2);

    scale = chroma
      .scale([chroma(sourceColor).brighten(steps), sourceColor, chroma(sourceColor).darken(steps)])
      .domain(range);
  } else {
    scale = !isDark(sourceColor)
      ? chroma.scale([sourceColor, chroma(sourceColor).darken(numSteps)]).domain(range)
      : chroma.scale([sourceColor, chroma(sourceColor).brighten(numSteps)]).domain(range);
  }

  const startRange = startInRange ?? minRange;
  const stopRange = stopInRange ?? maxRange;
  const result: string[] = [];

  for (let i = startRange; i <= stopRange; i += stepsDistance) {
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
  const scaleBg = createColorScale(bg, { direction: "center" });
  const scaleFg = createColorScale(fg, { direction: "center" });
  let result: SuggestionResult[] = [];

  result = [...getBestScalesContrast(scaleBg, scaleFg)];

  if (result.length <= 3) {
    const fallbackScale = createColorScale("#000", {
      range: [0, 950],
      startInRange: 50,
    });

    result = [
      ...result,
      ...getBestScalesContrast([bg], fallbackScale),
      ...getBestScalesContrast([fg], fallbackScale),
    ];
  }

  result = result.sort((a, b) => parseFloat(a.contrast) - parseFloat(b.contrast));

  return _uniqWith(
    result,
    (objA: SuggestionResult, objB: SuggestionResult) => objA.fg === objB.fg && objA.bg === objB.bg,
  );
}
