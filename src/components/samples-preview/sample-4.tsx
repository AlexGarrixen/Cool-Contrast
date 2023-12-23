import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";

import { inlineStylesBg, inlineStylesFg, cssFgVar, cssBgVar, alphaVar } from "./utils";

const classes = {
  root: stack({
    p: "6",
    rounded: "xl",
  }),
  bgImg: css({ height: "32", rounded: "lg", bgSize: "cover" }),
  content: css({ px: "4", mt: "-12" }),
  avatar: circle({ size: "20", border: "4px solid" }),
  title: css({ textStyle: "display-sm", mt: "3", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "3" }),
};

const imgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1703299157/color-contrast-inspector/sample-4-avatar.webp";
const bgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1703298911/color-contrast-inspector/sample-4-bg.webp";

export function Sample4() {
  return (
    <article className={classes.root} style={inlineStylesBg}>
      <div
        className={classes.bgImg}
        style={{
          backgroundColor: cssFgVar,
          backgroundImage: `url(${bgSrc})`,
          [alphaVar as string]: "0.16",
        }}
      />
      <div className={classes.content}>
        <figure>
          <img
            alt="avatar"
            className={classes.avatar}
            height={80}
            src={imgSrc}
            style={{ borderColor: cssBgVar }}
            width={80}
          />
        </figure>
        <p className={classes.title} style={inlineStylesFg}>
          Martin Garrix
        </p>
        <p className={classes.desc} style={inlineStylesFg}>
          Dj, Producer and Musician
        </p>
      </div>
    </article>
  );
}
