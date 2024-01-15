import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { applyStyle } from "../utils";

const classes = {
  body: css({ fontWeight: "medium", textStyle: "display-xs", lg: { textStyle: "display-md" } }),

  bodyLabel: css({
    display: "inline-block",
    w: "1/5",
    textStyle: "body-base",
    fontWeight: "normal",
    lg: {
      textStyle: "body-lg",
      w: "2/12",
    },
  }),

  links: css({
    display: "flex",
    flexDirection: "column",
    mt: "12",
    gap: "4",
    lg: { justifyContent: "space-between", flexDirection: "row" },
  }),

  linksGroup: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4",
    "& li": {
      textDecoration: "underline",
    },
    lg: { gap: "6", justifyContent: "left" },
  }),
};

export function About() {
  return (
    <section className={container()} style={applyStyle("color")}>
      <p className={classes.body}>
        <span className={classes.bodyLabel}>About</span>
        I&apos;m Martin Garrix, born on May 14th 1996 in Amstelveen. Since my debut with
        &quot;Animals&quot; in 2013, I have made my mark in electronic music. Recognized for my
        energy on stage and outstanding collaborations, reaching the title of #1 DJ according to DJ
        Mag Top 100. My passion for innovation and connecting with the audience defines my path in
        the music scene.
      </p>
      <div className={classes.links}>
        <ul className={classes.linksGroup}>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Spotify</li>
          <li>Twitter</li>
        </ul>
        <ul className={classes.linksGroup}>
          <li>Stmpd Rcrds</li>
          <li>Stmpd Studios</li>
        </ul>
      </div>
    </section>
  );
}
