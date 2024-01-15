import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";

import { cssFgVar, applyStyle } from "../utils";

const classes = {
  root: stack({ gap: "6", p: "6", rounded: "xl", align: "center" }),
  bgImg: css({ height: "32", rounded: "lg", bgSize: "cover", width: "100%" }),
  content: stack({ mt: "-16", gap: "3", align: "center" }),
  avatar: circle({ size: "20", border: "4px solid" }),
  about: css({ textAlign: "center" }),
  username: css({ textStyle: "display-xs", fontWeight: "bold" }),
  role: css({ textStyle: "body-base", mt: "2" }),
  stats: css({ display: "flex", gap: "8", flexWrap: "wrap" }),
  stat: css({ textAlign: "center" }),
  statSubHeading: css({ textStyle: "body-xs", mb: "1" }),
  statValue: css({ textStyle: "display-sm", fontWeight: "bold" }),
};

const imgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1703315333/color-contrast-inspector/sample-5-avatar.webp";
const bgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1703315333/color-contrast-inspector/sample-5-bg.webp";

export function Sample5() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div
        className={classes.bgImg}
        style={{
          ...applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" }),
          backgroundImage: `url(${bgSrc})`,
        }}
      />
      <div className={classes.content}>
        <img
          alt="avatar"
          className={classes.avatar}
          height={80}
          src={imgSrc}
          style={{ borderColor: cssFgVar }}
          width={80}
        />
        <div className={classes.about}>
          <p className={classes.username} style={applyStyle("color")}>
            Tesla
          </p>
          <p className={classes.role} style={applyStyle("color")}>
            Electric vehicles, giant batteries & solar
          </p>
        </div>
      </div>
      <ul className={classes.stats}>
        <StatItem subheading="Valuation" value="70 M" />
        <StatItem subheading="Followers" value="21 M" />
        <StatItem subheading="Following" value="55" />
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
