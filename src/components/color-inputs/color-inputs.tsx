import { css } from "@root/styled-system/css";

import { BackgroundInput } from "./background";
import { ForegroundInput } from "./foreground";
import { SwapButton } from "./swap-button";

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
      <SwapButton />
      <ForegroundInput />
    </section>
  );
}
