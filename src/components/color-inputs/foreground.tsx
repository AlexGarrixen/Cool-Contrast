"use client";

import { useAtom } from "jotai";

import { foreground } from "@/store";

import { ColorControl } from "./color-control";

export function ForegroundInput() {
  const [fg, setFg] = useAtom(foreground);

  return <ColorControl label="Text Color" sourceColor={fg} onChange={setFg} />;
}
