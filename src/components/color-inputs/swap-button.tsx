"use client";

import { useSetAtom } from "jotai";
import { css } from "@root/styled-system/css";

import { swapColors } from "@/store";
import { Button } from "@/components/primitives/button";
import { InvertFill } from "@/components/icons";

export function SwapButton() {
  const swap = useSetAtom(swapColors);

  return (
    <Button
      isIconOnly
      aria-label="swap button"
      className={css({ fontSize: "icon-24", borderColor: "transparent" })}
      onClick={swap}
    >
      <InvertFill />
    </Button>
  );
}
