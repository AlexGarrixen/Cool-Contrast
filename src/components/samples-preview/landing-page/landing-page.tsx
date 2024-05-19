import { css } from "@root/styled-system/css";

import { WindowMockup } from "../minimalist-page/window-mockup";

import { Hero } from "./hero";
import { Releases } from "./releases";
import { Tours } from "./tours";

const classes = {
  root: css({
    shadow: "xl",
    rounded: "xl",
    border: "1px solid",
    borderColor: "border-secondary!",
    overflow: "hidden",
  }),
};

export function LandingPage() {
  return (
    <div className={classes.root}>
      <WindowMockup />
      <Hero />
      <Releases />
      <Tours />
    </div>
  );
}
