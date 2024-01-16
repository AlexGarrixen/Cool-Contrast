import { CheckFill, CloseFill } from "@/components/icons";

import classes from "./contrast-level.styled";

interface Iprops {
  textType: "normal" | "large";
  contrast: string;
  pass?: boolean;
}

export function ContrastLevel({ textType, contrast, pass }: Iprops) {
  return (
    <li>
      <span className={classes.textType}>{textType.toUpperCase()} TEXT</span>
      <div className={classes.levelContainer}>
        <p className={classes.contrast}>{contrast}</p>
        {pass ? (
          <CheckFill aria-label="check" className={classes.checkIcon} />
        ) : (
          <CloseFill aria-label="close" className={classes.closeIcon} />
        )}
      </div>
    </li>
  );
}
