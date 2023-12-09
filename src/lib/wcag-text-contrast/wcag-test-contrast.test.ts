import { describe, it, expect } from "@jest/globals";

import { wcagContrastTest } from "./wcag-text-contrast";

describe("Lib / WCAG Text Contrast", () => {
  it("Pass all rules", () => {
    const result = wcagContrastTest("#ACC8E5", "#112A46");

    expect(result.passAAALargeText).toBeTruthy();
    expect(result.passAAANormalText).toBeTruthy();
    expect(result.passAALargeText).toBeTruthy();
    expect(result.passAANormalText).toBeTruthy();
  });

  it("Partially approved rules with individual channel config", () => {
    const result = wcagContrastTest(
      { mode: "hsl", channels: { h: 50, s: 100, l: 71 } },
      { mode: "hsl", channels: { h: 49, s: 100, l: 23 } },
    );

    expect(result.passAAALargeText).toBeTruthy();
    expect(result.passAAANormalText).toBeFalsy();
    expect(result.passAALargeText).toBeTruthy();
    expect(result.passAANormalText).toBeTruthy();
  });

  it("Fail all rules", () => {
    const result = wcagContrastTest("#667380", "#112A46");

    expect(result.passAAALargeText).toBeFalsy();
    expect(result.passAAANormalText).toBeFalsy();
    expect(result.passAALargeText).toBeFalsy();
    expect(result.passAANormalText).toBeFalsy();
  });

  it("Throw error when it is an invalid color", () => {
    expect(() => wcagContrastTest("#667380", "randomColor")).toThrow();
  });
});
