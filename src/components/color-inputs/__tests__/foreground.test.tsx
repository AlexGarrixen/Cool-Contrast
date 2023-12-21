import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { ForegroundInput } from "../foreground";

describe("Foreground Panel", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ForegroundInput />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should update input text", () => {
    const screen = render(<ForegroundInput />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "#555" } });

    expect(input.value).toBe("#555");
  });
});
