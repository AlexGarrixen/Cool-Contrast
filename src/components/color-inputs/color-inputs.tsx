import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { BackgroundInput } from "./background";
import { ForegroundInput } from "./foreground";
import { SwapButton } from "./swap-button";
import { SuggestionsButton } from "./suggestions-button";

export function ColorInputs() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        mt: "16",
        alignItems: "center",
        gap: "8",
        md: { flexDirection: "row" },
        lg: { gap: "12" },
      })}
    >
      <BackgroundInput />
      <div className={stack({ gap: "3", direction: { base: "row", md: "column" } })}>
        <SwapButton />
        <SuggestionsButton />
      </div>
      <ForegroundInput />
    </section>
  );
}
