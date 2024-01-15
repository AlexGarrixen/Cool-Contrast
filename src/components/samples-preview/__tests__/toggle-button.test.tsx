import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import * as ToggleButton from "../toggle-button";

function Render() {
  return (
    <ToggleButton.Root defaultValue="one">
      <ToggleButton.Item value="one">one</ToggleButton.Item>
      <ToggleButton.Item value="two">two</ToggleButton.Item>
    </ToggleButton.Root>
  );
}

describe("Samples Preview / ToggleButton", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Render />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should change active item", () => {
    const screen = render(<Render />);
    const btnTwo = screen.getByText("two");

    fireEvent.click(btnTwo);

    expect(btnTwo.getAttribute("aria-pressed")).toBe("true");
  });
});
