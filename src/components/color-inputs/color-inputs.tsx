import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { ChangeFill } from "@/components/icons";

import { BackgroundInput } from "./background";
import { ForegroundInput } from "./foreground";

export function ColorInputs() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        mt: "5",
        gap: "5",
        alignItems: "center",
        md: { flexDirection: "row", gap: "8" },
      })}
    >
      <BackgroundInput />
      <Button isIconOnly className={css({ shadow: "sm" })} variant="solid-white">
        <ChangeFill />
      </Button>
      <ForegroundInput />
    </section>
  );
}
