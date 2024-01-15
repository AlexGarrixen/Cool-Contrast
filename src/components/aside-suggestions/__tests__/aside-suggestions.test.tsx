import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import * as useHooks from "@uidotdev/usehooks";

import AsideSuggestions from "../aside-suggestions";

jest.mock("@uidotdev/usehooks", () => ({
  __esModule: true,
  useMediaQuery: jest.fn(() => true),
}));

describe("Aside Suggestions", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<AsideSuggestions />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should render only is small device", () => {
    jest.spyOn(useHooks, "useMediaQuery").mockReturnValue(false);

    const screen = render(<AsideSuggestions />);

    expect(screen.container.firstChild).toBeNull();
  });
});
