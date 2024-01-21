import { describe, it } from "@jest/globals";

import { createSuggestions } from "./contrast-suggestions";

describe("Lib / Contrast Suggestions", () => {
  it("Should return array of suggestions", () => {
    const suggestions = createSuggestions({ forColor: "#ff0000", matchingColor: "#ffb700" });

    expect(Array.isArray(suggestions)).toBeTruthy();

    const properties = Object.keys(suggestions[0]);

    expect(properties).toContain("color");
    expect(properties).toContain("contrast");
  });
});
