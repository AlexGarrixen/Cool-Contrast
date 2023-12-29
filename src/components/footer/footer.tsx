import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { SocialXFill, LinkFill } from "@/components/icons";

const classes = {
  root: css({
    mt: "8",
    pb: "6",
    color: "text-secondary",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  author: css({ color: "text-primary", textDecoration: "underline", fontWeight: "bold", ml: "1" }),
  icons: css({ display: "flex", gap: "4", "& svg": { fontSize: "icon-20" } }),
};

export function Footer() {
  return (
    <footer className={`${classes.root} ${container()}`}>
      <p>
        Made by
        <a className={classes.author} href="https://github.com/AlexGarrixen">
          Alex Garrixen
        </a>
      </p>
      <div className={classes.icons}>
        <a href="https://alextexis.vercel.app">
          <LinkFill />
        </a>
        <a href="https://twitter.com/AlexGarrixen">
          <SocialXFill />
        </a>
      </div>
    </footer>
  );
}
