"use client";

import type { ComponentType, SVGProps } from "react";

import { useAtomValue, type ExtractAtomValue } from "jotai";
import { token } from "@root/styled-system/tokens";

import { EmojiVeryHappyFill, HappyFill, UnhappyFill } from "@/components/icons";
import { contrastRelation } from "@/store";

import classes from "./contrast-score.styled";

type Feedback = ExtractAtomValue<typeof contrastRelation>["feedback"];
type EmojiComponent = ComponentType<SVGProps<SVGSVGElement>>;

const EmojiStatus: Record<Feedback, EmojiComponent> = {
  poor: UnhappyFill,
  good: HappyFill,
  "very-good": EmojiVeryHappyFill,
};

export function ContrastScore() {
  const { contrast, feedback } = useAtomValue(contrastRelation);

  function getSemanticColor() {
    if (feedback === "poor") return token("colors.text-error");

    return token("colors.text-success");
  }

  const Emoji = EmojiStatus[feedback];

  return (
    <div className={classes.root}>
      <span className={classes.subheading}>CONTRAST RELATION</span>
      <div className={classes.scoreWrapper} style={{ color: getSemanticColor() }}>
        <div>
          <span className={classes.feedback}>{feedback.replace("-", " ")}</span>
          <span className={classes.contrastRatio}>{contrast.toFixed(2)}</span>
        </div>
        <Emoji className={classes.checkIcon} />
      </div>
    </div>
  );
}
