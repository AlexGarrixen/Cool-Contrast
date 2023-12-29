import { describe, it } from "@jest/globals";

import { createContrastSuggestions } from "./contrast-suggestions";

describe("Lib / Contrast Suggestions", () => {
  it("Should return array of suggestions object", () => {
    const suggestions = createContrastSuggestions("#01F062", "#B6A3A4");

    expect(Array.isArray(suggestions)).toBeTruthy();

    const properties = Object.keys(suggestions[0]);

    expect(properties).toContain("fg");
    expect(properties).toContain("bg");
    expect(properties).toContain("contrast");
    expect(properties).toContain("id");
  });
});
