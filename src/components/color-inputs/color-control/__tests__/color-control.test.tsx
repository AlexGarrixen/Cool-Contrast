import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { useState } from "react";

import { ColorControl } from "..";

describe("Color Control", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ColorControl label="Background" />);

    expect(screen.getByText("Background")).toBeInTheDocument();
    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update value on change input", () => {
    function Render() {
      const [value, setValue] = useState("#000");

      return <ColorControl sourceColor={value} onChange={(value) => setValue(value)} />;
    }

    const screen = render(<Render />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "#fff" } });

    expect(input.getAttribute("value")).toBe("#fff");
  });

  it("Should show popover color channels", () => {
    const screen = render(<ColorControl />);
    const [buttonSettings] = screen.getAllByLabelText("picker button");

    fireEvent.click(buttonSettings);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
