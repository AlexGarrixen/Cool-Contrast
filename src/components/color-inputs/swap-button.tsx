"use client";

import { useSetAtom } from "jotai";
import { css } from "@root/styled-system/css";

import { swapColors } from "@/store";
import { Button } from "@/components/primitives/button";
import { ChangeFill } from "@/components/icons";

export function SwapButton() {
  const swap = useSetAtom(swapColors);

  return (
    <Button
      isIconOnly
      aria-label="swap button"
      className={css({ shadow: "sm" })}
      variant="solid-white"
      onClick={swap}
    >
      <ChangeFill />
    </Button>
  );
}
