import type { ReactNode } from "react";

import classes from "./panel.styled";

interface Iprops {
  label: string;
  color?: string;
  children?: ReactNode;
}

export function Panel({ label, children, color }: Iprops) {
  return (
    <div className={classes.root}>
      <div className={classes.preview} style={{ backgroundColor: color }} />
      <div className={classes.rightContent}>
        <label className={classes.label}>{label}</label>
        <div>{children}</div>
      </div>
    </div>
  );
}
