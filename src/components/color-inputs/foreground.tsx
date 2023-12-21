"use client";

import { useAtom } from "jotai";

import { foreground } from "@/store";

import { Panel } from "./panel";
import { ColorControl, PopoverColorChannels } from "./color-control";

export function ForegroundInput() {
  const [fg, setFg] = useAtom(foreground);

  return (
    <Panel label="TEXT COLOR">
      <ColorControl
        popover={<PopoverColorChannels sourceColor={fg} onChange={setFg} />}
        sourceColor={fg}
        onChange={setFg}
      />
    </Panel>
  );
}
