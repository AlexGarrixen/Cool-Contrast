/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";

import { useColorChannelField } from "./use-color-channel-field";

describe("Hooks / useColorChannelField", () => {
  it("change value on call 'onChangeInput' function", () => {
    const { result } = renderHook(() => useColorChannelField({ value: "0" }));
    const testValue = "20";

    // @ts-ignore
    act(() => result.current.onChangeInput({ target: { value: testValue } }));

    expect(result.current.value).toBe(testValue);
  });

  it("set 'fallback' param when value exit of range", () => {
    const fallback = "5";
    const testValue = "08";
    const { result } = renderHook(() => useColorChannelField({ fallback, max: 5, min: 0 }));

    // @ts-ignore
    act(() => result.current.onChangeInput({ target: { value: testValue } }));
    act(() => result.current.onBlurInput());

    expect(result.current.value).toBe(fallback);
  });

  it("set 'fallback' param when value is invalid", () => {
    const fallback = "10";
    const testValue = "##$?code";
    const { result } = renderHook(() => useColorChannelField({ fallback }));

    // @ts-ignore
    act(() => result.current.onChangeInput({ target: { value: testValue } }));
    act(() => result.current.onBlurInput());

    expect(result.current.value).toBe(fallback);
  });

  it("call 'onChange' callback on blur event", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useColorChannelField({ value: "3", onChange }));

    // @ts-ignore
    act(() => result.current.onBlurInput());
    expect(onChange).toHaveBeenCalled();
  });
});
