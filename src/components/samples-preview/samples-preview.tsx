"use client";

import { useAtomValue } from "jotai";
import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";
import Color from "color";

import {
  background,
  foreground,
  contentTab,
  selectedBgSuggestion,
  selectedFgSuggestion,
} from "@/store";

import { LandingPage } from "./landing-page";
import { UIElements } from "./ui-elements";
import { fgVar, bgVar } from "./utils";

const classes = {
  root: css({
    pt: 6,
  }),
};

const previewModes = {
  minimalistPage: "landing",
  uiElements: "elements",
};

export function SamplesPreview() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const bgSuggestion = useAtomValue(selectedBgSuggestion);
  const fgSuggestion = useAtomValue(selectedFgSuggestion);
  const activeTab = useAtomValue(contentTab);
  const resolvedBg = bgSuggestion || bg;
  const resolvedFg = fgSuggestion || fg;
  const bgRgb = Color(resolvedBg).rgb().round().array().join(" ");
  const fgRgb = Color(resolvedFg).rgb().round().array().join(" ");

  return (
    <section
      className={classes.root}
      style={{ [fgVar as string]: fgRgb, [bgVar as string]: bgRgb }}
    >
      <div className={container()}>
        {activeTab === previewModes.minimalistPage ? <LandingPage /> : <UIElements />}
      </div>
    </section>
  );
}
