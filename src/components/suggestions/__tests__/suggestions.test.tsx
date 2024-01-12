import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { background, foreground } from "@/store";

import { Suggestions } from "../suggestions";

describe("Suggestions List", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Suggestions />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should call onApply callback", () => {
    const mockHandler = jest.fn();
    const screen = render(<Suggestions className="my-class" onApply={mockHandler} />);
    const [button] = screen.getAllByRole("button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalled();
  });

  it("Should show text when is suggestions empty", () => {
    background.onMount = (set) => set("#fff");
    foreground.onMount = (set) => set("#000");

    const screen = render(<Suggestions />);

    expect(screen.getByText("There is nothing more to suggest")).toBeInTheDocument();
  });
});
