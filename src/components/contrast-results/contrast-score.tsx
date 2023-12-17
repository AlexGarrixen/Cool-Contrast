import { EmojiVeryHappyFill } from "@/components/icons";

import classes from "./contrast-score.styled";

export function ContrastScore() {
  return (
    <div className={classes.root}>
      <span className={classes.subheading}>CONTRAST RELATION</span>
      <div className={classes.scoreWrapper}>
        <div>
          <span className={classes.feedback}>Very Good</span>
          <span className={classes.contrastRatio}>7.82</span>
        </div>
        <EmojiVeryHappyFill className={classes.checkIcon} />
      </div>
    </div>
  );
}
