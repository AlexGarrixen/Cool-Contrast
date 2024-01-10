"use client";

import { useAtom } from "jotai";

import { foreground } from "@/store";

import { Panel } from "./panel";
import { ColorControl, PopoverColorChannels } from "./color-control";

export function ForegroundInput() {
  const [fg, setFg] = useAtom(foreground);

  return (
    <Panel color={fg} label="Text Color">
      <ColorControl
        popover={<PopoverColorChannels sourceColor={fg} onChange={setFg} />}
        sourceColor={fg}
        onChange={setFg}
      />
    </Panel>
  );
}
