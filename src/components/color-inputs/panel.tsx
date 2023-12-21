import type { ReactNode } from "react";

import classes from "./panel.styled";

interface Iprops {
  label: string;
  children?: ReactNode;
}

export function Panel({ label, children }: Iprops) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>{label}</header>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
