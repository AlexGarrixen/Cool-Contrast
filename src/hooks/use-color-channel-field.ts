import type { ChangeEvent } from "react";

import { useControllable } from "@/hooks/use-controllable";
import { regexColorChannel, regexChannelStartWithZero } from "@/const/colors";

export interface Parameters {
  onChange?: (value: string) => void;
  max?: number;
  min?: number;
  value?: string;
  fallback?: string;
}

export function useColorChannelField(params?: Parameters) {
  const fallback = params?.fallback ?? "0";
  const [value, setValue] = useControllable(fallback, params?.value, params?.onChange);
  const max = params?.max ?? 100;
  const min = params?.min ?? 0;

  function onBlurInput() {
    let nextValue = value;

    if (regexChannelStartWithZero.test(nextValue)) {
      nextValue = parseInt(nextValue).toString();
    }

    if (!regexColorChannel.test(value) || parseInt(nextValue) < min || parseInt(nextValue) > max) {
      nextValue = fallback;
    }

    setValue(nextValue);
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;

    setValue(nextValue, true);
  }

  return {
    value,
    setValue,
    onBlurInput,
    onChangeInput,
  };
}
