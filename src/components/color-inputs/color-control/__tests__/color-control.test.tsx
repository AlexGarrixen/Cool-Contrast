import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { useState } from "react";

import { ColorControl, PopoverColorChannels } from "..";

describe("Color Control", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ColorControl popover={<PopoverColorChannels />} />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update value on change input", () => {
    function Render() {
      const [value, setValue] = useState("#000");

      return (
        <ColorControl
          popover={<PopoverColorChannels />}
          sourceColor={value}
          onChange={(value) => setValue(value)}
        />
      );
    }

    const screen = render(<Render />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "#fff" } });

    expect(input.getAttribute("value")).toBe("#fff");
  });

  it("Should show popover color channels", () => {
    const screen = render(<ColorControl popover={<PopoverColorChannels />} />);
    const buttonSettings = screen.getByLabelText("settings button");

    fireEvent.click(buttonSettings);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
