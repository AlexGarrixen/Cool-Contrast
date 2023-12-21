import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { background, foreground } from "@/store";

import { ContrastScore } from "../contrast-score";

describe("Contrast Score", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<ContrastScore />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should show content correct when contrast ratio is greater to 7.1", () => {
    background.onMount = (set) => set("#fff");
    foreground.onMount = (set) => set("#000");

    const screen = render(<ContrastScore />);

    expect(screen.getByText("21.00")).toBeInTheDocument();
    expect(screen.getByText("very good")).toBeInTheDocument();
  });

  it("Should show content correct when contrast ratio is greather than 4.5 and less than 7.1", () => {
    background.onMount = (set) => set("#244469");
    foreground.onMount = (set) => set("#ACC8E5");

    const screen = render(<ContrastScore />);

    expect(screen.getByText("5.77")).toBeInTheDocument();
    expect(screen.getByText("good")).toBeInTheDocument();
  });

  it("Should show content correct when contrast ratio is less than 4.5", () => {
    background.onMount = (set) => set("#70777F");
    foreground.onMount = (set) => set("#333436");

    const screen = render(<ContrastScore />);

    expect(screen.getByText("2.75")).toBeInTheDocument();
    expect(screen.getByText("poor")).toBeInTheDocument();
  });
});
