import * as Popover from "@radix-ui/react-popover";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { ColorPicker } from "@/components/color-picker";
import { useHexColorField } from "@/hooks/use-hex-color-field";
import { fallbackColor } from "@/const/colors";

const classes = {
  root: css({
    display: "inline-flex",
    alignItems: "center",
    p: 1,
    bgColor: "bg-primary",
    shadow: "sm",
    rounded: "xl",
    gap: 2,
  }),

  input: css({ border: "none", px: 3, width: "104px" }),
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
      <div className={classes.root}>
        <Popover.Trigger asChild>
          <Button isIconOnly size="md" style={{ backgroundColor: value }} />
        </Popover.Trigger>
        <Input
          className={classes.input}
          size="md"
          type="text"
          value={value}
          onBlur={onBlurInput}
          onChange={onChangeInput}
        />
      </div>
      <Popover.Content align="start" side="bottom" sideOffset={12}>
        <ColorPicker sourceColor={value} onChange={setValue} />
      </Popover.Content>
    </Popover.Root>
  );
}
