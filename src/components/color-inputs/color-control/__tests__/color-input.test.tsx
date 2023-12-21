import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { Root as PopoverRoot } from "@radix-ui/react-popover";

import { ColorInput } from "../color-input";

describe("Color Input", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(
      <PopoverRoot>
        <ColorInput />
      </PopoverRoot>,
    );

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should show iput value prop", () => {
    const screen = render(
      <PopoverRoot>
        <ColorInput value="#222" />
      </PopoverRoot>,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe("#222");
  });

  it("Should set fallback value on input blur  when value is invalid", () => {
    const screen = render(
      <PopoverRoot>
        <ColorInput value="#fff" />
      </PopoverRoot>,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: ":)" } });
    fireEvent.blur(input);

    expect(input.value).toBe("#000000");
  });

  it("Should call onChange when input value is valid", () => {
    const onChangeMock = jest.fn();
    const screen = render(
      <PopoverRoot>
        <ColorInput value="#000" onChange={onChangeMock} />
      </PopoverRoot>,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "#222" } });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
