import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";
import { slider } from "@root/styled-system/recipes";

import { applyStyle, cssFgVar } from "../utils";

const classes = {
  root: stack({ gap: "6", p: "6", rounded: "xl" }),
  progress: slider(),
  contentPrice: css({ textStyle: "display-lg", fontWeight: "bold" }),
  contentBody: css({ textStyle: "body-base", mt: "2" }),
  bottomContent: css({ display: "flex", justifyContent: "space-between", alignItems: "center" }),
  bottomContentPrice: css({ textStyle: "body-lg", fontWeight: "bold" }),
  bottomContentBody: css({ textStyle: "body-sm", mt: "2" }),
};

export function Sample11() {
  return (
    <article className={classes.root} style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
      <p>Server Resources</p>
      <div>
        <p className={classes.contentPrice}>$30,227.00</p>
        <p className={classes.contentBody}>Estimated savings</p>
      </div>
      <div className={classes.progress.root}>
        <div
          className={`${classes.progress.track} ${css({ height: "2!" })}`}
          style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
        >
          <div
            className={classes.progress.range}
            style={{ width: "40%", ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }}
          />
        </div>
      </div>
      <div className={classes.bottomContent}>
        <div>
          <p className={classes.bottomContentPrice}>$20,124/mo</p>
          <p className={classes.bottomContentBody}>Total saved</p>
        </div>
        <div>
          <p className={classes.bottomContentPrice}>$10,124/mo</p>
          <p className={classes.bottomContentBody}>Saving in progress</p>
        </div>
      </div>
    </article>
  );
}
