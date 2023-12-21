import { describe, it } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";

import { useControllable } from "./use-controllable";

describe("Hooks / useControllable", () => {
  it("unconstrollabe", () => {
    const { result } = renderHook(() => useControllable(1));
    const [value, setValue] = result.current;

    expect(value).toBe(1);

    act(() => setValue(2));
    expect(result.current[0]).toBe(2);
  });

  it("call setState passing function", () => {
    const { result } = renderHook(() => useControllable(1));
    const [value, setValue] = result.current;

    expect(value).toBe(1);

    act(() => setValue((current) => current + 1));
    expect(result.current[0]).toBe(2);
  });

  it("constrollabe", () => {
    const handlerMock = jest.fn();
    const controlledValue = 2;
    const { result } = renderHook(() => useControllable<number>(1, controlledValue, handlerMock));
    const [value, setValue] = result.current;

    expect(value).toBe(2);

    act(() => setValue(10));
    expect(result.current[0]).toBe(10);
    expect(handlerMock).toHaveBeenCalled();
  });

  it("constrollabe without call onChange handler", () => {
    const handlerMock = jest.fn();
    const controlledValue = 2;
    const { result } = renderHook(() => useControllable<number>(1, controlledValue, handlerMock));
    const [value, setValue] = result.current;

    expect(value).toBe(2);

    act(() => setValue(10, true));
    expect(result.current[0]).toBe(10);
    expect(handlerMock).not.toHaveBeenCalled();
  });
});
