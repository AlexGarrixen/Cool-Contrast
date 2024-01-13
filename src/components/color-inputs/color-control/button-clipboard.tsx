import { useEffect, useRef } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { css } from "@root/styled-system/css";

import { useToggle } from "@/hooks/use-toggle";
import { Button } from "@/components/primitives/button";
import { CheckFill, ClipboardLine } from "@/components/icons";

export function ButtonClipboard({ color }: { color?: string }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const { isEnabled, onOpen, onClose } = useToggle();
  const timeoutId = useRef<number>();

  function onClick() {
    if (color) copyToClipboard(color);
    onOpen();
  }

  useEffect(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);

    timeoutId.current = window.setTimeout(onClose, 1500);
  }, [copiedText, onClose, timeoutId]);

  return (
    <Button
      aria-label="picker button"
      className={css({ border: "none", fontSize: "icon-24" })}
      onClick={onClick}
    >
      {isEnabled ? <CheckFill aria-label="check" /> : <ClipboardLine aria-label="clipboard" />}
    </Button>
  );
}
