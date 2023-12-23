import Image from "next/image";
import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";
import memoji from "@root/public/memoji-face.png";

import { cssFgVar, applyStyle } from "./utils";

const classes = {
  root: stack({ gap: "6", p: "6", rounded: "xl", align: "center" }),
  avatar: circle({ size: "24", "& > img": { w: "16" } }),
  about: css({ textAlign: "center" }),
  username: css({ textStyle: "display-sm", fontWeight: "bold" }),
  location: css({ textStyle: "body-base", mt: "2" }),
  stats: css({ display: "flex", gap: "8", flexWrap: "wrap" }),
  stat: css({ textAlign: "center" }),
  statSubHeading: css({ textStyle: "body-xs", mb: "1" }),
  statValue: css({ textStyle: "display-sm", fontWeight: "bold" }),
};

export function Sample2() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div
        className={classes.avatar}
        style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
      >
        <Image alt="memoji" src={memoji} unoptimized={false} />
      </div>
      <div className={classes.about}>
        <p className={classes.username} style={applyStyle("color")}>
          Martin Robbie
        </p>
        <p className={classes.location} style={applyStyle("color")}>
          New York, USA
        </p>
      </div>
      <ul className={classes.stats}>
        <StatItem subheading="Projects" value="28" />
        <StatItem subheading="Followers" value="970" />
        <StatItem subheading="Following" value="87" />
      </ul>
    </article>
  );
}

function StatItem({ subheading, value }: { subheading: string; value: string }) {
  return (
    <li className={classes.stat} style={applyStyle("color")}>
      <span className={classes.statSubHeading}>{subheading}</span>
      <p className={classes.statValue}>{value}</p>
    </li>
  );
}
