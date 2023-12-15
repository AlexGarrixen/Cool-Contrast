import { createRef } from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import { Input } from "../input";

describe("Primitives / Input", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Input />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Successful ref forwarding", () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} />);

    expect(ref.current).not.toBeUndefined();
  });

  it("Verify that it is disabled and has the aria-label set to 'true'", () => {
    const screen = render(<Input disabled />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("aria-disabled", "true");
  });

  it("Verify que  se llame un manejador de evento", () => {
    const mockHandler = jest.fn();
    const screen = render(<Input onChange={mockHandler} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "hello" } });

    expect(mockHandler).toHaveBeenCalled();
  });

  it("Verify that you have the correct type attribute", () => {
    const emailScreen = render(<Input type="email" />);
    const passwordScreen = render(
      <>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </>,
    );
    const emailInput = emailScreen.getByRole("textbox") as HTMLInputElement;
    const passwordInput = passwordScreen.getByLabelText(/password/i) as HTMLInputElement;

    expect(emailInput).toHaveAttribute("type", "email");
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
