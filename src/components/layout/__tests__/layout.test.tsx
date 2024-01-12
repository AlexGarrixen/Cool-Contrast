import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { Layout } from "../layout";

describe("Layout", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Layout />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should render slot content", () => {
    const screen = render(
      <Layout aside={<>aside</>} content={<>content</>} header={<>header</>} />,
    );

    expect(screen.getByText("header")).toBeInTheDocument();
    expect(screen.getByText("aside")).toBeInTheDocument();
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
