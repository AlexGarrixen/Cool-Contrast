/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { describe, it } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";

import { useHexColorField } from "./use-hex-color-field";

const fallbackColor = "#1a1a1a";
const testColor = "#fafafa";

describe("Hooks / useHexColorField", () => {
  it("change value on call 'onChangeInput' parameter", () => {
    const { result } = renderHook(() => useHexColorField());

    //@ts-ignore
    act(() => result.current.onChangeInput({ target: { value: testColor } }));

    expect(result.current.value).toBe(testColor);
  });

  it("set as value the 'fallback' param when color is invalid", () => {
    const { result } = renderHook(() => useHexColorField({ fallback: fallbackColor }));

    //@ts-ignore
    act(() => result.current.onChangeInput({ target: { value: "#&%code" } }));
    act(() => result.current.onBlurInput());

    expect(result.current.value).toBe(fallbackColor);
  });

  it("call 'onChange' param", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useHexColorField({ onChange }));

    //@ts-ignore
    act(() => result.current.onChangeInput({ target: { value: testColor } }));

    expect(onChange).toHaveBeenCalled();
  });

  it("use as initial value the value parameter", () => {
    const { result } = renderHook(() => useHexColorField({ value: testColor }));

    expect(result.current.value).toBe(testColor);
  });
});
