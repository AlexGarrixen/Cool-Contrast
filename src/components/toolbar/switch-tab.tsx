"use client";

import { useAtom, type ExtractAtomValue } from "jotai";

import { SwitchTab, SwitchTabButton } from "@/components/switch-tab";
import { contentTab as contentTabAtom } from "@/store";

export function SwitchTabBtn() {
  const [activeTab, setActiveTab] = useAtom(contentTabAtom);

  function onChange(value: string) {
    setActiveTab(value as ExtractAtomValue<typeof contentTabAtom>);
  }

  return (
    <SwitchTab value={activeTab} onChange={onChange}>
      <SwitchTabButton value="landing">Landing Page</SwitchTabButton>
      <SwitchTabButton value="elements">UI Elements</SwitchTabButton>
    </SwitchTab>
  );
}
