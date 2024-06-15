"use client";

import { Drawer } from "vaul";
import { useAtom, useSetAtom } from "jotai";
import * as Dialog from "@radix-ui/react-dialog";

import { useMediaQuery } from "@/hooks/use-media-query";
import { showDialogMoreDetails, selectedBgSuggestion, selectedFgSuggestion } from "@/store";

import { ContrastRatio } from "./contrast-ratio";
import { Sugesstions } from "./suggestions";
import { DialogFooter } from "./footer";
import { classes } from "./dialog-more-details.styled";

export function DialogMoreDetails() {
  const [isOpen, setIsOpen] = useAtom(showDialogMoreDetails);
  const setSelectedBgSuggestion = useSetAtom(selectedBgSuggestion);
  const setSelectedFgSuggestion = useSetAtom(selectedFgSuggestion);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onClose = () => setIsOpen(false);

  function onOpenChange(open: boolean) {
    if (!open) {
      setSelectedBgSuggestion("");
      setSelectedFgSuggestion("");
    }

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
            <Sugesstions />
          </div>
          <DialogFooter onCancel={onClose} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
