"use client";

import { useSetAtom } from "jotai";
import * as Dialog from "@radix-ui/react-dialog";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { Suggestions } from "@/components/suggestions";
import { LightFill, CloseFill } from "@/components/icons";
import { background, foreground } from "@/store";
import { useToggle } from "@/hooks/use-toggle";

import classes from "./suggestions-button.styled";

export function SuggestionsButton() {
  const { isEnabled: open, onOpen, onClose, setOpen } = useToggle();
  const setFg = useSetAtom(foreground);
  const setBg = useSetAtom(background);

  function onClickApply(bg: string, fg: string) {
    setFg(fg);
    setBg(bg);
    onClose();
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          isIconOnly
          aria-label="swap button"
          className={css({
            fontSize: "icon-24",
            borderColor: "transparent",
            display: { lg: "none" },
          })}
          onClick={onOpen}
        >
          <LightFill />
        </Button>
      </Dialog.Trigger>
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
            <Suggestions className={classes.suggestions} onApply={onClickApply} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
