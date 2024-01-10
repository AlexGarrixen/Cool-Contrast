"use client";

import { useSetAtom } from "jotai";

import { swapColors } from "@/store";
import { Button } from "@/components/primitives/button";
import { ChangeFill } from "@/components/icons";

export function SwapButton() {
  const swap = useSetAtom(swapColors);

  return (
    <Button isIconOnly aria-label="swap button" onClick={swap}>
      <ChangeFill />
    </Button>
  );
}
