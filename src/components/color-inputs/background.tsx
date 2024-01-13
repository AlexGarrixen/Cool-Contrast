"use client";

import { useAtom } from "jotai";

import { background } from "@/store";

import { ColorControl } from "./color-control";

export function BackgroundInput() {
  const [bg, setBg] = useAtom(background);

  return <ColorControl label="Background Color" sourceColor={bg} onChange={setBg} />;
}
