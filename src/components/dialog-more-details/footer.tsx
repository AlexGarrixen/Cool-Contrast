"use client";

import { useSetAtom, useAtom } from "jotai";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { selectedBgSuggestion, selectedFgSuggestion, background, foreground } from "@/store";

export function DialogFooter({ onCancel }: { onCancel?: () => void }) {
  const [selectedBackgroundSuggestion, setSelectedBackgroundSuggestion] =
    useAtom(selectedBgSuggestion);
  const [selectedForegroundSuggestion, setSelectedForegroundSuggestion] =
    useAtom(selectedFgSuggestion);
  const setBg = useSetAtom(background);
  const setFg = useSetAtom(foreground);
  const isDisabledApply = !selectedBackgroundSuggestion && !selectedForegroundSuggestion;

  function onApply() {
    if (selectedBackgroundSuggestion) {
      setBg(selectedBackgroundSuggestion);
      setSelectedBackgroundSuggestion("");
    }
    if (selectedForegroundSuggestion) {
      setFg(selectedForegroundSuggestion);
      setSelectedForegroundSuggestion("");
    }

    onCancel?.();
  }

  return (
    <footer
      className={css({ display: "flex", gap: "3", px: "6", py: "6", "& button": { flex: 1 } })}
    >
      <Button isDisabled={isDisabledApply} size="lg" variant="solid" onClick={onApply}>
        Apply
      </Button>
      <Button size="lg" variant="solid-white" onClick={onCancel}>
        Cancel
      </Button>
    </footer>
  );
}
