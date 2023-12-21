import { describe, it } from "@jest/globals";
import { renderHook, act } from "@testing-library/react";

import { useToggle } from "./use-toggle";

describe("Hooks/use toggle", () => {
  it("Should init with inital value prop", () => {
    const {
      result: { current },
    } = renderHook(() => useToggle(true));

    expect(current.isEnabled).toBeTruthy();
  });

  it("Should update value to 'true' on call onOpen", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current.onOpen());
    expect(result.current.isEnabled).toBeTruthy();
  });

  it("Should update value to 'false' on call onClose", () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => result.current.onClose());
    expect(result.current.isEnabled).toBeFalsy();
  });

  it("Should update value on call onToggle", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current.onToggle());
    expect(result.current.isEnabled).toBeTruthy();
  });

  it("Should set value on call setOpen", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current.setOpen(true));
    expect(result.current.isEnabled).toBeTruthy();
  });
});
