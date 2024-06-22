"use client";

import { Drawer } from "vaul";
import { useAtom, useSetAtom } from "jotai";
import * as Dialog from "@radix-ui/react-dialog";

import { useMediaQuery } from "@/hooks/use-media-query";
import { showDialogMoreDetails, clearSuggestionsPreselected } from "@/store";

import { ContrastRatio } from "./contrast-ratio";
import { Sugesstions } from "./suggestions";
import { DialogFooter } from "./footer";
import { classes } from "./dialog-more-details.styled";

export function DialogMoreDetails() {
  const [isOpen, setIsOpen] = useAtom(showDialogMoreDetails);
  const clearColorsPreselected = useSetAtom(clearSuggestionsPreselected);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function onClose() {
    setIsOpen(false);
    clearColorsPreselected();
  }

  function onOpenChange(open: boolean) {
    if (!open) clearColorsPreselected();

    setIsOpen(open);
  }

  if (isDesktop)
    return (
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className={classes.dialogOverlay} />
          <Dialog.Content className={classes.dialogContent}>
            <div className={classes.content}>
              <ContrastRatio />
              <Sugesstions />
            </div>
            <DialogFooter onCancel={onClose} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className={classes.drawerOverlay} />
        <Drawer.Content className={classes.drawerContent}>
          <div className={classes.drawerIndicator} />
          <div className={classes.content}>
            <ContrastRatio />
            <Sugesstions />
          </div>
          <DialogFooter onCancel={onClose} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
