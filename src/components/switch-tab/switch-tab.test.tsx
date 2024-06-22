import { useState } from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { SwitchTab, SwitchTabButton } from "./switch-tab";

describe("Suggestions List", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(
      <SwitchTab defaultValue="two">
        <SwitchTabButton value="one">one</SwitchTabButton>
        <SwitchTabButton value="two">two</SwitchTabButton>
      </SwitchTab>,
    );

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Highlight button that matches the default value", () => {
    const screen = render(
      <SwitchTab defaultValue="two">
        <SwitchTabButton value="one">one</SwitchTabButton>
        <SwitchTabButton value="two">two</SwitchTabButton>
      </SwitchTab>,
    );

    const btn = screen.getByText("two");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-pressed", "true");
  });

  it("Should controlled", () => {
    function Render() {
      const [tab, setTab] = useState("one");

      return (
        <SwitchTab value={tab} onChange={setTab}>
          <SwitchTabButton value="one">one</SwitchTabButton>
          <SwitchTabButton value="two">two</SwitchTabButton>
        </SwitchTab>
      );
    }

    const screen = render(<Render />);
    const tabOne = screen.getByText("one");
    const tabTwo = screen.getByText("two");

    expect(tabOne).toHaveAttribute("aria-pressed", "true");
    expect(tabTwo).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(tabTwo);

    expect(tabOne).toHaveAttribute("aria-pressed", "false");
    expect(tabTwo).toHaveAttribute("aria-pressed", "true");
  });
});
