"use client";

import type { ChangeEvent } from "react";

import { Input } from "@/components/primitives/input";
import { useControllable } from "@/hooks/use-controllable";

import classes from "./input-channel.styled";
import { regexNumberText, regexStartWithZero } from "./utils";

interface IsliderChannelProps {
  label: string;
  onChange?: (value: string) => void;
  max?: number;
  min?: number;
  value?: number;
}

export function InputChannel({ label, onChange, max = 100, min = 0, value }: IsliderChannelProps) {
  const valueToString = value ? value.toString() : undefined;
  const [inputValue, setInputValue] = useControllable("0", valueToString, onChange);

  function validateInputOnBlur() {
    let nextValue = inputValue;

    if (regexStartWithZero.test(nextValue)) {
      nextValue = parseInt(inputValue).toString();
    }

    if (
      !regexNumberText.test(inputValue) ||
      parseInt(nextValue) < min ||
      parseInt(nextValue) > max
    ) {
      nextValue = "0";
    }

    setInputValue(nextValue);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;

    setInputValue(nextValue, true);
  }

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}</span>
      <Input
        className={classes.input}
        placeholder="0"
        size="sm"
        value={inputValue}
        onBlur={validateInputOnBlur}
        onChange={handleInputChange}
      />
    </div>
  );
}
