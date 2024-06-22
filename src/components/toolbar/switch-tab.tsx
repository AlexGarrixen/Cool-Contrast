"use client";

import { type ReactNode, forwardRef } from "react";
import { useAtom, type ExtractAtomValue } from "jotai";
import * as Select from "@radix-ui/react-select";
import { css } from "@root/styled-system/css";

import { Icons } from "@/components/icons-lib";
import { Button } from "@/components/primitives/button";
import { contentTab as contentTabAtom } from "@/store";

const classes = {
  wrapper: css({
    display: "inline-flex",
    flexShrink: 0,
    w: "max-content",
    border: "1px solid",
    borderColor: "border-secondary",
    bgColor: "bg-primary",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.04)",
    rounded: "lg",
    overflow: "hidden",
    outline: "none",
    cursor: "pointer",
    fontWeight: "600",

    "& > div": {
      minW: "126px",
      h: "100%",
      flex: 1,
      display: "flex",
      alignItems: "center",
      px: "3",
      fontWeight: "medium",
    },
  }),

  btn: css({
    boxShadow: "none",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
    rounded: "0",
  }),

  dialog: css({
    bgColor: "white",
    overflow: "hidden",
    rounded: "md",
    boxShadow: "md",
    border: "1px solid",
    borderColor: "border-tertiary",
  }),

  viewport: css({ p: "2" }),

  selectItem: css({
    display: "flex",
    alignItems: "center",
    gap: "3",
    color: "text-primary",
    textStyle: "text-base",
    py: "1",
    px: "2",
    outline: "none",
    rounded: "md",
    cursor: "pointer",
    _hover: {
      bgColor: "bg-quarterary",
    },
    "&[data-highlighted]": {
      bgColor: "bg-tertiary",
    },
  }),

  selectItemCheck: css({
    w: "4",
    h: "4",
  }),
};

export function SwitchTabBtn() {
  const [activeTab, setActiveTab] = useAtom(contentTabAtom);

  function onChange(value: string) {
    setActiveTab(value as ExtractAtomValue<typeof contentTabAtom>);
  }

  return (
    <Select.Root value={activeTab} onValueChange={onChange}>
      <Select.Trigger asChild aria-label="Content type">
        <div className={classes.wrapper}>
          <div>
            <Select.Value />
          </div>
          <Button isIconOnly className={classes.btn} size="lg" variant="solid-white">
            <Icons.CaretDown />
          </Button>
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={classes.dialog} position="popper" side="bottom" sideOffset={4}>
          <Select.Viewport className={classes.viewport}>
            <SelectItem value="landing">Landing Page</SelectItem>
            <SelectItem value="elements">Elements</SelectItem>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef<HTMLDivElement, { value: string; children?: ReactNode }>(
  ({ children, value }, forwardedRef) => {
    return (
      <Select.Item ref={forwardedRef} className={classes.selectItem} value={value}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <Icons.Check className={classes.selectItemCheck} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = "SelectItem";
