import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);

  const onToggle = () => setIsEnabled((show) => !show);

  const onOpen = () => setIsEnabled(true);

  const onClose = () => setIsEnabled(false);

  const setOpen = (value: boolean) => setIsEnabled(value);

  return {
    isEnabled,
    onToggle,
    onOpen,
    onClose,
    setOpen,
  };
}
