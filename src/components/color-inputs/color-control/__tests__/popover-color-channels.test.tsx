import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import * as Popover from "@radix-ui/react-popover";

import { PopoverColorChannels } from "..";

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

  it("Should call onChange when channel input update", () => {
    const onChangeMock = jest.fn();

    const screen = render(
      <Popover.Root open>
        <PopoverColorChannels sourceColor="#000" onChange={onChangeMock} />
      </Popover.Root>,
    );
    const [input] = screen.getAllByRole("textbox") as HTMLInputElement[];

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "200" } });
    fireEvent.blur(input);

    expect(input.value).toBe("200");
  });
});
