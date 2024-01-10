"use client";

import { useAtom } from "jotai";

import { background } from "@/store";

import { Panel } from "./panel";
import { ColorControl, PopoverColorChannels } from "./color-control";

export function BackgroundInput() {
  const [bg, setBg] = useAtom(background);

  return (
    <Panel color={bg} label="Background Color">
      <ColorControl
        popover={<PopoverColorChannels sourceColor={bg} onChange={setBg} />}
        sourceColor={bg}
        onChange={setBg}
      />
    </Panel>
  );
}
