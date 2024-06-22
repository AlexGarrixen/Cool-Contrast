import { useRef } from "react";
import { css } from "@root/styled-system/css";

import { WindowMockup } from "./window-mockup";
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

  containerFullScreen: css({ overflowY: "auto" }),
};

export function LandingPage() {
  const refContainerFullScreen = useRef<HTMLDivElement>(null);

  function onClickExpand() {
    const element = refContainerFullScreen.current;

    if (!element) return;

    element.requestFullscreen();
  }

  return (
    <div className={classes.root}>
      <WindowMockup onClickExpand={onClickExpand} />
      <div ref={refContainerFullScreen} className={classes.containerFullScreen}>
        <Hero />
        <Releases />
        <Tours />
      </div>
    </div>
  );
}
