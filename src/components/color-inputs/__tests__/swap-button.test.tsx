import { useAtom, useAtomValue } from "jotai";
import { describe, it } from "@jest/globals";
import { render, renderHook, act } from "@testing-library/react";

import { swapColors, background, foreground } from "@/store";

import { SwapButton } from "../swap-button";

describe("Swap Button", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<SwapButton />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should swap colors", () => {
    background.onMount = (set) => set("#fff");
    foreground.onMount = (set) => set("#000");

    const bgAtom = renderHook(() => useAtomValue(background));
    const fgAtom = renderHook(() => useAtomValue(foreground));
    const { result } = renderHook(() => useAtom(swapColors));

    act(() => result.current[1]());

    expect(bgAtom.result.current).toBe("#000");
    expect(fgAtom.result.current).toBe("#fff");
  });
});
