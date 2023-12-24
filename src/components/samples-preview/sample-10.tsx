import { css } from "@root/styled-system/css";
import { circle } from "@root/styled-system/patterns";

import { applyStyle } from "./utils";

const classes = {
  root: css({ display: "flex", alignItems: "center", gap: "6", p: "6", rounded: "xl" }),
  avatar: circle({ size: "16" }),
  heading: css({ fontWeight: "bold", textStyle: "body-lg" }),
  body: css({ mt: "1" }),
};

const imgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1703377265/color-contrast-inspector/sample-10-avatar.webp";

export function Sample10() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <img alt="avatar" className={classes.avatar} src={imgSrc} />
      <div style={applyStyle("color")}>
        <p className={classes.heading}>Robert joined team designers</p>
        <p className={classes.body}>04 June, 2022 - 1:00 PM</p>
      </div>
    </article>
  );
}
