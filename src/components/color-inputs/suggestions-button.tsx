"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { Suggestions } from "@/components/suggestions";
import { LightFill, CloseFill } from "@/components/icons";
import { useToggle } from "@/hooks/use-toggle";

import classes from "./suggestions-button.styled";

export function SuggestionsButton() {
  const { isEnabled: open, onOpen, onClose, setOpen } = useToggle();

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
            <Suggestions className={classes.suggestions} onApply={onClose} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
