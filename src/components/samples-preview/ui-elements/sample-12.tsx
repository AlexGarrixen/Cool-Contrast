import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";
import { slider } from "@root/styled-system/recipes";

import { applyStyle, cssFgVar } from "../utils";

const classes = {
  root: stack({ gap: "4", p: "6", rounded: "xl" }),
  progress: slider(),
  heading: css({ textStyle: "body-lg", fontWeight: "500" }),
  percentage: css({ textStyle: "body-sm" }),
  content: css({ display: "flex", alignItems: "center", justifyContent: "space-between" }),
};

export function Sample12() {
  return (
    <article className={classes.root} style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
      <div className={classes.content}>
        <p className={classes.heading}>Project Progress</p>
        <span className={classes.percentage}>80%</span>
      </div>
      <div className={classes.progress.root}>
        <div
          className={`${classes.progress.track} ${css({ height: "2!" })}`}
          style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
        >
          <div
            className={classes.progress.range}
            style={{ width: "80%", ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }}
          />
        </div>
      </div>
    </article>
  );
}
