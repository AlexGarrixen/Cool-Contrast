import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { SliderChannel } from "../slider-channel";

jest.mock("@radix-ui/react-slider", () => ({
  Root: jest.fn(
    ({
      onValueChange,
      onValueCommit,
    }: {
      onValueChange: (value: number[]) => void;
      onValueCommit: (value: number[]) => void;
    }) => (
      <input
        type="range"
        onChange={() => onValueChange([1])}
        onMouseUp={() => onValueCommit([1])}
      />
    ),
  ),
  Track: jest.fn(() => <span />),
  Range: jest.fn(() => <span />),
  Thumb: jest.fn(() => <span />),
}));

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

  it("Should call on SliderValueChange and onSliderValueCommit on slider value change", () => {
    const onSliderValueChangeMock = jest.fn();
    const onSliderValueCommitMock = jest.fn();
    const screen = render(
      <SliderChannel
        label="Background"
        onSliderValueChange={onSliderValueChangeMock}
        onSliderValueCommit={onSliderValueCommitMock}
      />,
    );
    const input = screen.getByRole("slider") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.mouseUp(input);

    expect(onSliderValueChangeMock).toHaveBeenCalled();
    expect(onSliderValueCommitMock).toHaveBeenCalled();
  });
});
