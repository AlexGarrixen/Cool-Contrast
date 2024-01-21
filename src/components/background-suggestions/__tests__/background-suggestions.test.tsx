import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import * as useHooks from "@uidotdev/usehooks";

import ForegroundSuggestions, { Skeleton } from "../background-suggestions";

jest.mock("@uidotdev/usehooks", () => ({
  __esModule: true,
  useMediaQuery: jest.fn(() => true),
}));

describe("Background Suggestions", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ForegroundSuggestions />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Correct rendering and unmount of skeleton", () => {
    const screen = render(<Skeleton />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should render only is small device", () => {
    jest.spyOn(useHooks, "useMediaQuery").mockReturnValue(false);

    const screen = render(<ForegroundSuggestions />);

    expect(screen.container.firstChild).toBeNull();
  });
});
