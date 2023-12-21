import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { BackgroundInput } from "../background";

describe("Background Panel", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<BackgroundInput />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update input text", () => {
    const screen = render(<BackgroundInput />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "#333" } });

    expect(input.value).toBe("#333");
  });
});
