import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { ContrastLevel } from "../contrast-level";

describe("Contrast Level", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ContrastLevel contrast="AA - 4.5:1" textType="normal" />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should render the contrast and text type", () => {
    const screen = render(<ContrastLevel contrast="AA - 4.5:1" textType="normal" />);
    const contrastText = screen.getByText("AA - 4.5:1");
    const textType = screen.getByText("NORMAL TEXT");
    const closeIcon = screen.getByLabelText("close");

    expect(contrastText).toBeInTheDocument();
    expect(textType).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });

  it("Should show check icon", () => {
    const screen = render(<ContrastLevel pass contrast="AA - 4.5:1" textType="normal" />);

    const checkIcon = screen.getByLabelText("check");

    expect(checkIcon).toBeInTheDocument();
  });
});
