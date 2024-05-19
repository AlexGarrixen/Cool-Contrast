"use client";

import { useState } from "react";
import { useAtomValue } from "jotai";
import { css } from "@root/styled-system/css";
import Color from "color";

import { background, foreground } from "@/store";

import * as ToggleButton from "./toggle-button";
import { LandingPage } from "./landing-page";
import { UIElements } from "./ui-elements";
import { fgVar, bgVar } from "./utils";

const classes = {
  root: css({ my: "6" }),
  toggle: css({ textAlign: "center", mb: "6" }),
};

const previewModes = {
  minimalistPage: "minimalist-page",
  uiElements: "ui-elements",
};

export function SamplesPreview() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const [previewMode, setPreviewMode] = useState<string>(previewModes.minimalistPage);
  const bgRgb = Color(bg).rgb().round().array().join(" ");
  const fgRgb = Color(fg).rgb().round().array().join(" ");

  return (
    <section
      className={classes.root}
      style={{ [fgVar as string]: fgRgb, [bgVar as string]: bgRgb }}
    >
      <div className={classes.toggle}>
        <ToggleButton.Root defaultValue={previewMode} onChange={setPreviewMode}>
          <ToggleButton.Item value={previewModes.minimalistPage}>Minimalist Page</ToggleButton.Item>
          <ToggleButton.Item value={previewModes.uiElements}>UI Elements</ToggleButton.Item>
        </ToggleButton.Root>
      </div>
      {previewMode === previewModes.minimalistPage ? <LandingPage /> : <UIElements />}
    </section>
  );
}
