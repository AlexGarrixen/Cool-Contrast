import { useState } from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { ColorSelector } from "./color-selector";

describe("Color Selector", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ColorSelector />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("call 'onChangeColor' callback", () => {
    const onChange = jest.fn();
    const screen = render(<ColorSelector onChangeColor={onChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalled();
  });

  it("should control 'value' from external component", () => {
    function Render() {
      const [value, setValue] = useState("#222222");

      return (
        <>
          <p>{value}</p>
          <ColorSelector value={value} onChangeColor={setValue} />
        </>
      );
    }

    const screen = render(<Render />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "#fafafa" } });

    expect(screen.getByText("#fafafa")).toBeInTheDocument();
  });
});
