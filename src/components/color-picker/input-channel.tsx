"use client";

import { Input } from "@/components/primitives/input";
import {
  useColorChannelField,
  type Parameters as ChannelParams,
} from "@/hooks/use-color-channel-field";

import classes from "./input-channel.styled";

interface IsliderChannelProps extends ChannelParams {
  label: string;
}

export function InputChannel({
  label,
  onChange,
  max = 100,
  min = 0,
  value: valueProp,
}: IsliderChannelProps) {
  const { value, onBlurInput, onChangeInput } = useColorChannelField({
    onChange,
    fallback: valueProp,
    max,
    min,
  });

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}</span>
      <Input
        className={classes.input}
        placeholder="0"
        size="sm"
        value={value}
        onBlur={onBlurInput}
        onChange={onChangeInput}
      />
    </div>
  );
}
