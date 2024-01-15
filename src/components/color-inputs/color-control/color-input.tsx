"use client";

import type { ChangeEvent } from "react";

import { useControllable } from "@/hooks/use-controllable";

import { regexColorHexadecimal } from "./utils";
import classes from "./color-input.styled";

interface Iprops {
  value?: string;
  onChange?: (color: string) => void;
}

const fallback = "#000000";

export function ColorInput({ value: valueProp, onChange }: Iprops) {
  const [value, setValue] = useControllable(fallback, valueProp, onChange);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;
    const omitOnChange = !regexColorHexadecimal.test(nextValue);

    setValue(nextValue, omitOnChange);
  }

  function handleBlur() {
    if (!value || !regexColorHexadecimal.test(value)) setValue(fallback);
  }

  return (
    <input
      className={classes.input}
      placeholder={fallback}
      type="text"
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}
