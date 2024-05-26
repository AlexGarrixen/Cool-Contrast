"use client";

import { useAtom, useSetAtom } from "jotai";
import { css } from "@root/styled-system/css";

import { foreground, background, swapColors } from "@/store";
import { ColorSelector } from "@/components/color-selector/color-selector";
import { Icons } from "@/components/icons-lib";

const classes = {
  complianceSelectors: css({ display: "flex", alignItems: "center", gap: 4 }),
};

export function ColorSelectors() {
  const [fg, setFg] = useAtom(foreground);
  const [bg, setBg] = useAtom(background);
  const swap = useSetAtom(swapColors);

  return (
    <div className={classes.complianceSelectors}>
      <ColorSelector value={bg} onChangeColor={setBg} />
      <button className={css({ cursor: "pointer" })} type="button" onClick={swap}>
        <Icons.ArrowsLeftRight />
      </button>
      <ColorSelector value={fg} onChangeColor={setFg} />
    </div>
  );
}
