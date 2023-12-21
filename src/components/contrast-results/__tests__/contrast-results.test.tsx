import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { background, foreground } from "@/store";

import { ContrastResults } from "../contrast-results";

describe("Contrast Score", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ContrastResults />);

    expect(() => screen.unmount()).not.toThrow();
  });
});
