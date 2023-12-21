"use client";

import type { ChangeEvent } from "react";

import * as Slider from "@radix-ui/react-slider";

import { Input } from "@/components/primitives/input";
import { useControllable } from "@/hooks/use-controllable";

import classes from "./slider-channel.styled";
import { regexNumberText, regexStartWithZero } from "./utils";

interface IsliderChannelProps {
  label: string;
  onChange?: (value: string) => void;
  onSliderValueCommit?: (value: number) => void;
  onSliderValueChange?: (value: number) => void;
  step?: number;
  max?: number;
  min?: number;
  value?: number;
}

export function SliderChannel({
  label,
  onChange,
  onSliderValueChange,
  onSliderValueCommit,
  max = 100,
  min = 0,
  step = 1,
  value,
}: IsliderChannelProps) {
  const valueToString = value ? value.toString() : undefined;
  const [inputValue, setInputValue] = useControllable("0", valueToString, onChange);
  const [sliderValue, setSliderValue] = useControllable(0, value, onSliderValueChange);

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

    setSliderValue(parseInt(nextValue));
    setInputValue(nextValue);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value;

    setInputValue(nextValue, true);
  }

  function handleSliderChange([value]: number[]) {
    setInputValue(value.toString(), true);
    setSliderValue(value);
  }

  function handleSliderCommit([value]: number[]) {
    onSliderValueCommit?.(value);
  }

  return (
    <div>
      <div className={classes.header}>
        <span className={classes.headerLabel}>{label}</span>
        <Input
          className={classes.input}
          placeholder="0"
          size="sm"
          value={inputValue}
          onBlur={validateInputOnBlur}
          onChange={handleInputChange}
        />
      </div>
      <Slider.Root
        className={classes.slider.root}
        max={max}
        min={min}
        step={step}
        value={[sliderValue]}
        onValueChange={handleSliderChange}
        onValueCommit={handleSliderCommit}
      >
        <Slider.Track className={classes.slider.track}>
          <Slider.Range className={classes.slider.range} />
        </Slider.Track>
        <Slider.Thumb aria-label="thumb" className={classes.slider.thumb} />
      </Slider.Root>
    </div>
  );
}
