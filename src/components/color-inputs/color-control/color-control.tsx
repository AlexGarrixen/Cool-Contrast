"use client";

import type { ReactNode } from "react";

import * as Popover from "@radix-ui/react-popover";

import { useToggle } from "@/hooks/use-toggle";

import { ColorInput } from "./color-input";

interface Iprops {
  popover: ReactNode;
  sourceColor?: string;
  onChange?: (color: string) => void;
}

export function ColorControl({ popover, sourceColor, onChange }: Iprops) {
  const { isEnabled: isOpen, setOpen } = useToggle();

  return (
    <Popover.Root open={isOpen} onOpenChange={setOpen}>
      <ColorInput value={sourceColor} onChange={onChange} />
      {isOpen ? popover : null}
    </Popover.Root>
  );
}
