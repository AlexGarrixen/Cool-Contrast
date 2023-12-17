import { ContrastScore } from "./contrast-score";
import { ContrastLevel } from "./contrast-level";
import classes from "./constrast-results.styled";

export function ContrastResults() {
  return (
    <div className={classes.root}>
      <ContrastScore />
      <ul className={classes.levels}>
        <ContrastLevel contrast="AA - 4.5:1" textType="normal" />
        <ContrastLevel pass contrast="AA - 3:1" textType="large" />
        <ContrastLevel contrast="AAA - 7:1" textType="normal" />
        <ContrastLevel pass contrast="AAA - 4.5:1" textType="large" />
      </ul>
    </div>
  );
}
