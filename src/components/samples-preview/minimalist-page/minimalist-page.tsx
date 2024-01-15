import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { applyStyle } from "../utils";

import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Releases } from "./releases";
import { Tours } from "./tours";
import { Episode } from "./episode";
import { Footer } from "./footer";
import { WindowMockup } from "./window-mockup";

const classes = {
  root: css({
    shadow: "xl",
    rounded: "xl",
    border: "1px solid",
    borderColor: "border-secondary!",
    overflow: "hidden",
  }),

  content: stack({ gap: "12", mt: "8", lg: { gap: "16" } }),
};

export function MinimalistPage() {
  return (
    <div className={classes.root} style={applyStyle("bg")}>
      <WindowMockup />
      <Navbar />
      <div className={classes.content}>
        <Hero />
        <About />
        <Releases />
        <Tours />
        <Episode />
        <Footer />
      </div>
    </div>
  );
}
