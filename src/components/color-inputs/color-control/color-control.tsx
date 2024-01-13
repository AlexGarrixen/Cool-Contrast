"use client";

import { ColorInput } from "./color-input";
import { ButtonPicker } from "./button-picker";
import { ButtonClipboard } from "./button-clipboard";
import classes from "./color-control.styled";

interface Iprops {
  label?: string;
  sourceColor?: string;
  onChange?: (color: string) => void;
}

export function ColorControl({ sourceColor, onChange, label }: Iprops) {
  return (
    <div className={classes.root}>
      <div className={classes.preview} style={{ backgroundColor: sourceColor }} />
      <div className={classes.content}>
        <label className={classes.label}>{label}</label>
        <ColorInput value={sourceColor} onChange={onChange} />
      </div>
      <div className={classes.actions}>
        <ButtonPicker sourceColor={sourceColor} onChange={onChange} />
        <ButtonClipboard color={sourceColor} />
      </div>
    </div>
  );
}
