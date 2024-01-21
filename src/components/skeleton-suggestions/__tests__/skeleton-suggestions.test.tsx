import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { SkeletonSuggestions } from "../skeleton-suggestions";

describe("Foreground Suggestions", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<SkeletonSuggestions />);

    expect(() => screen.unmount()).not.toThrow();
  });
});
