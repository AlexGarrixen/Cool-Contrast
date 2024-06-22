import type { ChangeEvent } from "react";

import { regexHexColor, fallbackColor } from "@/const/colors";

import { useControllable } from "./use-controllable";

export interface Parameters {
  value?: string;
  fallback?: string;
  onChange?: (color: string) => void;
}

export function useHexColorField(params?: Parameters) {
  const fallback = params?.fallback ?? fallbackColor;
  const [value, setValue] = useControllable(fallback, params?.value, params?.onChange);

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;
    const omitOnChange = !regexHexColor.test(nextValue);

    setValue(nextValue, omitOnChange);
  }

  function onBlurInput() {
    if (!value || !regexHexColor.test(value)) setValue(fallback);
  }

  return {
    value,
    setValue,
    onChangeInput,
    onBlurInput,
  };
}
