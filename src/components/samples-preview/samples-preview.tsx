"use client";

import { useAtomValue } from "jotai";
import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";
import Color from "color";

import { background, foreground, contentTab } from "@/store";

import { LandingPage } from "./landing-page";
import { UIElements } from "./ui-elements";
import { fgVar, bgVar } from "./utils";

const classes = {
  root: css({ mt: 6 }),
};

const previewModes = {
  minimalistPage: "landing",
  uiElements: "elements",
};

export function SamplesPreview() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const activeTab = useAtomValue(contentTab);
  const bgRgb = Color(bg).rgb().round().array().join(" ");
  const fgRgb = Color(fg).rgb().round().array().join(" ");

  return (
    <section
      className={cx(classes.root, container())}
      style={{ [fgVar as string]: fgRgb, [bgVar as string]: bgRgb }}
    >
      {activeTab === previewModes.minimalistPage ? <LandingPage /> : <UIElements />}
    </section>
  );
}
