import * as Popover from "@radix-ui/react-popover";
import { css } from "@root/styled-system/css";

import { useToggle } from "@/hooks/use-toggle";
import { Button } from "@/components/primitives/button";
import { ColorPickerFill } from "@/components/icons";

import { PopoverColorChannels } from "./popover-color-channels";

interface ButtonPickerProps {
  sourceColor?: string;
  onChange?: (color: string) => void;
}

export function ButtonPicker({ sourceColor, onChange }: ButtonPickerProps) {
  const { isEnabled: isOpen, setOpen } = useToggle();

  return (
    <Popover.Root open={isOpen} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button aria-label="picker button" className={css({ border: "none", fontSize: "icon-24" })}>
          <ColorPickerFill />
        </Button>
      </Popover.Trigger>
      {isOpen ? <PopoverColorChannels sourceColor={sourceColor} onChange={onChange} /> : null}
    </Popover.Root>
  );
}
