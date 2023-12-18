import { createRef } from "react";
import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { InputGroup } from "../input-group";

describe("Primitives / InputGroup", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(
      <InputGroup>
        <input />
      </InputGroup>,
    );

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Successful ref forwarding", () => {
    const ref = createRef<HTMLInputElement>();

    render(<InputGroup ref={ref} />);

    expect(ref.current).not.toBeUndefined();
  });

  it("Should render start content,end content and children", () => {
    const screen = render(
      <InputGroup
        endContent={<button type="button">end</button>}
        startContent={<button type="button">start</button>}
      >
        <input type="text" />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    const endContent = screen.getByText("end");
    const startContent = screen.getByText("start");

    expect(input).toBeInTheDocument();
    expect(endContent).toBeInTheDocument();
    expect(startContent).toBeInTheDocument();
  });

  it("Should render start content and children", () => {
    const screen = render(
      <InputGroup startContent={<button type="button">start</button>}>
        <input type="text" />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    const startContent = screen.getByText("start");

    expect(input).toBeInTheDocument();
    expect(startContent).toBeInTheDocument();
  });

  it("Should render end content and children", () => {
    const screen = render(
      <InputGroup endContent={<button type="button">end</button>}>
        <input type="text" />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    const endContent = screen.getByText("end");

    expect(input).toBeInTheDocument();
    expect(endContent).toBeInTheDocument();
  });
});
