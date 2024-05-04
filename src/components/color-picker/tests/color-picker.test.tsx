import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { ColorPicker } from "../color-picker";

describe("Color Picker", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ColorPicker />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update the active color mode on change select", () => {
    const screen = render(<ColorPicker />);
    const select = screen.getByLabelText("select color mode") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "hsl" } });
    expect(select.value).toBe("hsl");

    fireEvent.change(select, { target: { value: "cmyk" } });
    expect(select.value).toBe("cmyk");

    fireEvent.change(select, { target: { value: "hsv" } });
    expect(select.value).toBe("hsv");

    fireEvent.change(select, { target: { value: "hwb" } });
    expect(select.value).toBe("hwb");
  });

  it("Should call onChange when channel input update", () => {
    const onChangeMock = jest.fn();

    const screen = render(<ColorPicker sourceColor="#000" onChange={onChangeMock} />);
    const [input] = screen.getAllByRole("textbox") as HTMLInputElement[];

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "200" } });
    fireEvent.blur(input);

    expect(input.value).toBe("200");
    expect(onChangeMock).toHaveBeenCalled();
  });

  it("Should call onChange when interacting with the color picker", () => {
    const onChangeMock = jest.fn();

    const screen = render(<ColorPicker sourceColor="#000" onChange={onChangeMock} />);

    const el = screen.getByLabelText("Color");

    expect(el).toBeInTheDocument();

    fireEvent.mouseDown(el);
    fireEvent.mouseUp(el);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
