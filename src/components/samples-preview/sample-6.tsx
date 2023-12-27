import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";
import { slider } from "@root/styled-system/recipes";

import { Button } from "@/components/primitives/button";
import { MoreFill, UploadLine } from "@/components/icons";

import { cssFgVar, cssBgVar, applyStyle } from "./utils";

const classes = {
  root: stack({ gap: "6", p: "6", rounded: "xl" }),
  moreWrapper: css({ textAlign: "left" }),
  moreBtn: css({ fontSize: "icon-20" }),
  content: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }),
  iconWrapper: circle({ size: "24" }),
  icon: css({ fontSize: "icon-32" }),
  title: css({ mt: "5", textStyle: "display-sm", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "2" }),
  progress: slider(),
  storeLabels: css({
    pt: "4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "2",
    textStyle: "body-sm",
  }),
};

export function Sample6() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div className={classes.moreWrapper}>
        <Button
          isIconOnly
          aria-label="more button"
          className={classes.moreBtn}
          style={{
            ...applyStyle("bg", { fromVar: cssFgVar }),
            ...applyStyle("color", { fromVar: cssBgVar }),
          }}
          variant="solid"
        >
          <MoreFill />
        </Button>
      </div>
      <div className={classes.content}>
        <div
          className={classes.iconWrapper}
          style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
        >
          <UploadLine className={classes.icon} style={applyStyle("color", { alpha: "1" })} />
        </div>
        <p className={classes.title} style={applyStyle("color")}>
          Your Storage
        </p>
        <p className={classes.desc} style={applyStyle("color")}>
          Supervise your drive in the easiest way
        </p>
      </div>
      <div>
        <div className={classes.storeLabels} style={applyStyle("color")}>
          <span>20 Gb</span>
          <span>100 Gb</span>
        </div>
        <div className={classes.progress.root}>
          <div
            className={`${classes.progress.track} ${css({ height: "3!" })}`}
            style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
          >
            <div
              className={classes.progress.range}
              style={{ width: "20%", ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
