"use client";

import type { Dispatch, SetStateAction, ReactNode } from "react";

import { createContext, useContext } from "react";
import { css, cx } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { useControllable } from "@/hooks/use-controllable";

const classes = {
  root: css({
    p: "1",
    bgColor: "bg-primary",
    display: "inline-block",
    rounded: "xl",
    border: "1px solid",
    borderColor: "border-secondary",
    flexShrink: 0,
  }),

  item: css({ border: "none" }),

  enabledItem: css({ bgColor: "bg-tertiary", color: "text-primary" }),

  disabledItem: css({ color: "text-secondary" }),
};

interface ContextValue {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange?: (value: string) => void;
}

const Context = createContext<Pick<ContextValue, "value">>({
  value: "",
});

interface RootProps extends Pick<ContextValue, "onChange"> {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
}

export function SwitchTab({ children, defaultValue, value: valueProp, onChange }: RootProps) {
  const [value, setValue] = useControllable(defaultValue ?? "", valueProp, onChange);
  const valueProvider: ContextValue = { value, setValue, onChange };

  return (
    <Context.Provider value={valueProvider}>
      <div className={classes.root}>{children}</div>
    </Context.Provider>
  );
}

interface ItemProps extends Pick<ContextValue, "value"> {
  children: ReactNode;
}

export function SwitchTabButton({ children, value }: ItemProps) {
  const { value: activeValue, setValue, onChange } = useContext(Context) as ContextValue;
  const isEnabled = value === activeValue;

  function onClick() {
    setValue(value);
    onChange?.(value);
  }

  return (
    <Button
      aria-pressed={isEnabled ? "true" : "false"}
      className={cx(classes.item, isEnabled ? classes.enabledItem : classes.disabledItem)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
