import type { CSSProperties } from "react";

export const bgVar = "--bg";

export const fgVar = "--fg";

const alphaVar = "--alpha";

export const cssBgVar = `rgb(var(${bgVar}) / var(${alphaVar}, 1))`;

export const cssFgVar = `rgb(var(${fgVar}) / var(${alphaVar}, 1))`;

interface StyleFnOpts {
  fromVar?: string;
  alpha?: string;
}

export function applyStyle(property: "bg" | "color", options?: StyleFnOpts) {
  const resolvedVar = property === "bg" ? cssBgVar : cssFgVar;
  const targetOpts = { fromVar: resolvedVar, alpha: "1" } satisfies StyleFnOpts;

  Object.assign(targetOpts, options);

  const cssProp = property === "bg" ? "backgroundColor" : "color";

  return {
    [cssProp]: targetOpts.fromVar,
    [alphaVar as string]: targetOpts.alpha,
  } satisfies CSSProperties;
}
