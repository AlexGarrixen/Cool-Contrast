import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { Panel } from "../panel";

describe("Color Panel", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<Panel label="Background" />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should show label and children properties", () => {
    const screen = render(<Panel label="Background">Content</Panel>);

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Background")).toBeInTheDocument();
  });
});
