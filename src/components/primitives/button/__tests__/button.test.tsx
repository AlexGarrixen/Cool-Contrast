import { createRef } from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { Button } from "../button";

describe("Primitives / Button", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Button />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Successful ref forwarding", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(ref.current).not.toBeUndefined();
  });

  it("Verify that it is disabled", () => {
    const screen = render(<Button disabled />);
    const button = screen.getByRole("button") as HTMLInputElement;

    expect(button).toBeDisabled();
  });

  it("Should trigger onClick function", () => {
    const mockHandler = jest.fn();
    const screen = render(<Button onClick={mockHandler} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalled();
  });

  it("Verify that you have the correct type attribute", () => {
    const screen = render(<Button type="submit" />);
    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("type", "submit");
  });
});
