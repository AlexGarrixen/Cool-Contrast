"use client";

import { useSetAtom } from "jotai";

import { showDialogMoreDetails } from "@/store";
import { Button } from "@/components/primitives/button";
import { Icons } from "@/components/icons-lib";

export function MoreButton() {
  const setShowDialog = useSetAtom(showDialogMoreDetails);

  function onClick() {
    setShowDialog(true);
  }

  return (
    <Button isIconOnly size="lg" variant="solid-white" onClick={onClick}>
      <Icons.DotsVerticalFill />
    </Button>
  );
}
