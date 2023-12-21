import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import * as Popover from "@radix-ui/react-popover";

import { PopoverColorChannels } from "..";

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

describe("Popover Color Channels", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(
      <Popover.Root open>
        <PopoverColorChannels />
      </Popover.Root>,
    );

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update the active color mode on change select", () => {
    const screen = render(
      <Popover.Root open>
        <PopoverColorChannels />
      </Popover.Root>,
    );
    const select = screen.getByLabelText("select color mode") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "hsl" } });

    expect(select.value).toBe("hsl");
  });

  it("Should call onChange when slider value update", () => {
    const onChangeMock = jest.fn();

    const screen = render(
      <Popover.Root open>
        <PopoverColorChannels sourceColor="#000" onChange={onChangeMock} />
      </Popover.Root>,
    );
    const [input] = screen.getAllByRole("slider");

    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.mouseUp(input);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
