"use client";

import { Panel } from "./panel";
import { ColorControl, PopoverColorChannels } from "./color-control";

export function ForegroundInput() {
  return (
    <Panel label="TEXT COLOR">
      <ColorControl popover={<PopoverColorChannels />} />
    </Panel>
  );
}
