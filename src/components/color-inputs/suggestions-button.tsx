"use client";

import { useAtom, useAtomValue } from "jotai";
import * as Dialog from "@radix-ui/react-dialog";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { LightFill, CloseFill } from "@/components/icons";
import { background, foreground, contrastRelation } from "@/store";
import { createContrastSuggestions } from "@/lib/contrast-suggestions";

import classes from "./suggestions-button.styled";

export function SuggestionsButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button isIconOnly aria-label="swap button" className={css({ fontSize: "icon-20" })}>
          <LightFill />
        </Button>
      </Dialog.Trigger>
      <SuggestionsDialog />
    </Dialog.Root>
  );
}

function SuggestionsDialog() {
  const [fg, setFg] = useAtom(foreground);
  const [bg, setBg] = useAtom(background);
  const score = useAtomValue(contrastRelation);
  const suggestions = createContrastSuggestions(bg, fg).filter(
    (result) => parseFloat(result.contrast) > score.contrast,
  );
  const emptySuggestions = suggestions.length === 0;

  function onClickApply(bg: string, fg: string) {
    setFg(fg);
    setBg(bg);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={classes.dialogOverlay} />
      <Dialog.Content className={classes.dialogRoot}>
        <header className={classes.dialogHeader}>
          Contrast suggestions
          <Dialog.Close asChild>
            <Button isIconOnly size="sm">
              <CloseFill />
            </Button>
          </Dialog.Close>
        </header>
        <div className={classes.dialogBody}>
          {emptySuggestions ? (
            <p>There is nothing more to suggest</p>
          ) : (
            <ul className={classes.suggestionsGrid}>
              {suggestions.map((item) => (
                <li key={item.id}>
                  <SuggestionItem {...item} onApply={onClickApply} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function SuggestionItem({
  contrast,
  fg,
  bg,
  onApply,
}: {
  contrast: string;
  bg: string;
  fg: string;
  onApply: (bg: string, fg: string) => void;
}) {
  function onClickApply() {
    onApply(bg, fg);
  }

  return (
    <article className={classes.suggestion}>
      <div className={classes.suggestionPreviews}>
        <div className={classes.suggestionPreview} style={{ background: bg }}>
          <span style={{ color: fg }}>B</span>
        </div>
        <div className={classes.suggestionPreview} style={{ background: fg }}>
          <span style={{ color: bg }}>T</span>
        </div>
      </div>
      <div className={classes.suggestionContent}>
        <Dialog.Close asChild>
          <button className={classes.suggestionBtn} type="button" onClick={onClickApply}>
            Apply
          </button>
        </Dialog.Close>
        <span className={classes.suggestionContrast}>{contrast}</span>
      </div>
    </article>
  );
}
