import Image from "next/image";
import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";
import avatar from "@root/public/sample-3-avatar.jpg";

import { Button } from "@/components/primitives/button";
import { PencilFill } from "@/components/icons";

import { cssBgVar, cssFgVar, applyStyle } from "./utils";

const classes = {
  root: stack({
    gap: "6",
    p: "6",
    rounded: "xl",
    "& > div:first-child": { display: "flex", alignItems: "start", gap: "3" },
  }),
  content: css({ flex: 1 }),
  title: css({ textStyle: "body-lg", fontWeight: "bold" }),
  desc: css({ textStyle: "body-base", mt: "3", "& > span": { display: "block" } }),
  bottomContent: css({ display: "flex", alignItems: "center", justifyContent: "space-between" }),
  avatar: circle({ size: "8" }),
  icon: css({ fontSize: "icon-24" }),
};

export function Sample3() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div>
        <div className={classes.content}>
          <p className={classes.title} style={applyStyle("color")}>
            Discover the frontend trends for 2023! 🚀
          </p>
          <p className={classes.desc} style={applyStyle("color")}>
            Explore the benefits of working with React, Svelte, Angular, and Vue in front-end
            development. Do not miss it!.
            <span>#frontend #react #svelte #angular #vue</span>
          </p>
        </div>
        <PencilFill className={classes.icon} style={applyStyle("color")} />
      </div>
      <div className={classes.bottomContent}>
        <Image alt="avatar" className={classes.avatar} src={avatar} />
        <Button
          style={{
            ...applyStyle("bg", { fromVar: cssFgVar }),
            ...applyStyle("color", { fromVar: cssBgVar }),
          }}
          variant="solid"
        >
          Update
        </Button>
      </div>
    </article>
  );
}
