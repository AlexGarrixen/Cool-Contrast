import { CheckFill, CloseFill } from "@/components/icons";

import classes from "./contrast-level.styled";

interface Iprops {
  textType: "normal" | "large";
  contrast: string;
  pass?: boolean;
}

export function ContrastLevel({ textType, contrast, pass }: Iprops) {
  return (
    <li className={classes.root}>
      <div>
        <span className={classes.textType}>{textType.toUpperCase()} TEXT</span>
        <p className={classes.contrast}>{contrast}</p>
      </div>
      {pass ? (
        <CheckFill aria-label="check" className={classes.checkIcon} />
      ) : (
        <CloseFill aria-label="close" className={classes.closeIcon} />
      )}
    </li>
  );
}
