import { describe, it } from "@jest/globals";

import { applyStyle, cssFgVar, cssBgVar } from "./utils";

describe("Samples Preview / Utils", () => {
  it("applyStyle should return inlineStyle with backgroundColor", () => {
    const result = applyStyle("bg");

    expect(result).toHaveProperty("backgroundColor", cssBgVar);
  });

  it("applyStyle should return inlineStyle with color", () => {
    const result = applyStyle("color");

    expect(result).toHaveProperty("color", cssFgVar);
  });

  it("applyStyle should return inlineStyle with alpha value equal to 0.5", () => {
    const result = applyStyle("color", { alpha: "0.5" });

    expect(result).toHaveProperty("--alpha", "0.5");
  });
});
