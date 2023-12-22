import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { Button } from "@/components/primitives/button";
import { FingerprintLine } from "@/components/icons";

import { inlineStylesBg, inlineStylesFg, cssBgVar, cssFgVar } from "./utils";

const classes = {
  root: stack({ gap: "6", p: "6", rounded: "xl" }),
  icon: css({ fontSize: "icon-60" }),
  title: css({ textStyle: "display-sm", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "4" }),
};

export function Sample1() {
  return (
    <article className={classes.root} style={inlineStylesBg}>
      <div className={classes.icon} style={inlineStylesFg}>
        <FingerprintLine />
      </div>
      <div>
        <p className={classes.title} style={inlineStylesFg}>
          Control you card quickly and easily with one tap
        </p>
        <p className={classes.desc} style={inlineStylesFg}>
          Explore all the benefots of our cards with a single tap
        </p>
      </div>
      <Button style={{ backgroundColor: cssFgVar, color: cssBgVar }}>Try Free</Button>
    </article>
  );
}
