"use client";

import type { ChangeEvent } from "react";

import * as Popover from "@radix-ui/react-popover";

import { SettingsFill } from "@/components/icons";
import { Input } from "@/components/primitives/input";
import { InputGroup } from "@/components/primitives/input-group";
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
    <InputGroup
      endContent={
        <Popover.Trigger asChild>
          <button aria-label="settings button" className={classes.settings} type="button">
            <SettingsFill className={classes.icon} />
          </button>
        </Popover.Trigger>
      }
    >
      <Input
        placeholder={fallback}
        type="text"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </InputGroup>
  );
}
