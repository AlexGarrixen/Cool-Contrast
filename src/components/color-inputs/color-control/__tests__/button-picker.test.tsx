import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { ButtonClipboard } from "../button-clipboard";

describe("Color Control / Button Picker", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ButtonClipboard />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should icon check on click", () => {
    const screen = render(<ButtonClipboard color="#000" />);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    const checkSvg = screen.getByLabelText("check");

    expect(checkSvg).toBeInTheDocument();
  });
});
