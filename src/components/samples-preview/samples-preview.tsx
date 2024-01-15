"use client";

import { useAtomValue } from "jotai";
import Color from "color";
import { css } from "@root/styled-system/css";

import { background, foreground } from "@/store";

import { MinimalistPage } from "./minimalist-page";
import { fgVar, bgVar } from "./utils";

const classes = {
  root: css({ my: "6" }),
  text: css({ textStyle: "text-lg", textAlign: "center", mb: "3", color: "text-secondary" }),
};

export function SamplesPreview() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const bgRgb = Color(bg).rgb().round().array().join(" ");
  const fgRgb = Color(fg).rgb().round().array().join(" ");

  return (
    <section
      className={classes.root}
      style={{ [fgVar as string]: fgRgb, [bgVar as string]: bgRgb }}
    >
      <p className={classes.text}>Preview</p>
      <MinimalistPage />
    </section>
  );
}
