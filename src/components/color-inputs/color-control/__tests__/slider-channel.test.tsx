import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { SliderChannel } from "../slider-channel";

describe("Slider Channel", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<SliderChannel label="Background" />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should show label prop", () => {
    const screen = render(<SliderChannel label="Background" />);

    expect(screen.getByText("Background")).toBeInTheDocument();
  });

  it("Should show value property in the input", () => {
    const screen = render(<SliderChannel label="Background" value={10} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe("10");
  });

  it("Should update input value", () => {
    const screen = render(<SliderChannel label="Background" max={100} min={0} value={0} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "80" } });

    expect(input.value).toBe("80");
  });

  it("Should set to 0 if not meet the minimum and maximum value", () => {
    const onChangeMock = jest.fn();

    const screen = render(
      <SliderChannel label="Background" max={100} min={0} value={0} onChange={onChangeMock} />,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "200" } });
    fireEvent.blur(input);
    expect(input.value).toBe("0");

    fireEvent.change(input, { target: { value: "-200" } });
    fireEvent.blur(input);
    expect(input.value).toBe("0");

    expect(onChangeMock).toHaveBeenCalled();
  });

  it("Should fix input if value start with 0", () => {
    const screen = render(<SliderChannel label="Background" />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "002" } });
    fireEvent.blur(input);

    expect(input.value).toBe("2");
  });
});
