import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { Button } from "@/components/primitives/button";

import { cssBgVar, cssFgVar, applyStyle } from "./utils";

const classes = {
  root: stack({ gap: "10", p: "6", rounded: "xl", textAlign: "center" }),
  title: css({ textStyle: "display-sm", fontWeight: "bold" }),
  price: css({ textStyle: "display-lg", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "3" }),
};

export function Sample7() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div className={classes.title} style={applyStyle("color")}>
        Review your daily income
      </div>
      <div>
        <p className={classes.price} style={applyStyle("color")}>
          $680.5
        </p>
        <p className={classes.desc} style={applyStyle("color")}>
          Change payout method in settings
        </p>
      </div>
      <Button
        style={{
          ...applyStyle("bg", { fromVar: cssFgVar }),
          ...applyStyle("color", { fromVar: cssBgVar }),
        }}
      >
        Go settings
      </Button>
    </article>
  );
}
