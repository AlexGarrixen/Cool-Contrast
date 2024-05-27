import { describe, it } from "@jest/globals";
import chroma from "chroma-js";

import { randomColorGenerate } from "./random-color-generate";

describe("Lib / Random color generate", () => {
  it("Should return object of colors", () => {
    const result = randomColorGenerate();

    expect(result).toHaveProperty("baseColor");
    expect(result).toHaveProperty("baseColorContrast");
  });

  it("The result should pass WCAG compliance", () => {
    const { baseColor, baseColorContrast } = randomColorGenerate();

    const ratio = chroma.contrast(baseColor, baseColorContrast);

    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
});
