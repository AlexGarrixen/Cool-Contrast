import * as Popover from "@radix-ui/react-popover";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { Icons } from "@/components/icons-lib";
import { ColorPicker } from "@/components/color-picker";
import { useHexColorField } from "@/hooks/use-hex-color-field";
import { fallbackColor } from "@/const/colors";

const classes = {
  wrapper: css({
    display: "inline-flex",
    w: "max-content",
    border: "1px solid",
    borderColor: "border-secondary",
    bgColor: "bg-primary",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.04)",
    rounded: "lg",
    overflow: "hidden",

    "& > div": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      pl: "3",
      gap: "3",
    },
  }),

  colorPreview: css({
    h: "6",
    w: "6",
    borderRadius: "999px",
    display: "inline-block",
    border: "1px solid",
    borderColor: "border-secondary",
  }),

  field: css({
    h: "100%",
    w: "85px",
    border: "none",
    outline: "none",
    bgColor: "bg-primary",
    pl: "0",
    pr: "3",
  }),

  pickerBtn: css({
    boxShadow: "none",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
    rounded: "0",
  }),
};

interface Iprops {
  value?: string;
  onChangeColor?: (value: string) => void;
}

export function ColorSelector({ value: valueProp, onChangeColor }: Iprops) {
  const { value, setValue, onBlurInput, onChangeInput } = useHexColorField({
    fallback: fallbackColor,
    onChange: onChangeColor,
    value: valueProp,
  });

  return (
    <Popover.Root>
      <div className={classes.wrapper}>
        <div>
          <span className={classes.colorPreview} style={{ backgroundColor: value }} />
          <Input
            className={classes.field}
            placeholder="#000000"
            value={value}
            onBlur={onBlurInput}
            onChange={onChangeInput}
          />
        </div>
        <Popover.Trigger asChild>
          <Button isIconOnly className={classes.pickerBtn} size="lg" variant="solid-white">
            <Icons.Picker />
          </Button>
        </Popover.Trigger>
      </div>
      <Popover.Content align="start" side="bottom" sideOffset={12}>
        <ColorPicker sourceColor={value} onChange={setValue} />
      </Popover.Content>
    </Popover.Root>
  );
}
