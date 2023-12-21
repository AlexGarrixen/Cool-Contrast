"use client";

import { useState } from "react";

import { Panel } from "./panel";
import { ColorControl, PopoverColorChannels } from "./color-control";

export function BackgroundInput() {
  const [sourceColor, setSourceColor] = useState("#8FFF00");

  return (
    <Panel label="BACKGROUND">
      <ColorControl
        popover={<PopoverColorChannels sourceColor={sourceColor} onChange={setSourceColor} />}
        sourceColor={sourceColor}
        onChange={setSourceColor}
      />
    </Panel>
  );
}
