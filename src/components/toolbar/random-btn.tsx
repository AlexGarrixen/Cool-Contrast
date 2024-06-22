"use client";

import { useTransition } from "react";
import { useSetAtom } from "jotai";

import { Button } from "@/components/primitives/button";
import { background, foreground } from "@/store";
import { randomColorGenerate } from "@/lib/random-color-generate";

export function RandomButton() {
  const setBg = useSetAtom(background);
  const setFg = useSetAtom(foreground);
  const [isPending, startTransition] = useTransition();

  function onClick() {
    startTransition(() => {
      const { baseColor, baseColorContrast } = randomColorGenerate();

      setBg(baseColor);
      setFg(baseColorContrast);
    });
  }

  return (
    <Button keepColorOnDisabled isDisabled={isPending} size="lg" variant="solid" onClick={onClick}>
      Random
    </Button>
  );
}
