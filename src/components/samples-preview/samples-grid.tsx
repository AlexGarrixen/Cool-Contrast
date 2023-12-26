"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useAtomValue } from "jotai";
import Color from "color";
import { css } from "@root/styled-system/css";

import { background, foreground } from "@/store";

import { fgVar, bgVar } from "./utils";
import { Sample1 } from "./sample-1";
import { Sample2 } from "./sample-2";
import { Sample3 } from "./sample-3";
import { Sample4 } from "./sample-4";
import { Sample5 } from "./sample-5";
import { Sample6 } from "./sample-6";
import { Sample7 } from "./sample-7";
import { Sample8 } from "./sample-8";
import { Sample9 } from "./sample-9";
import { Sample11 } from "./sample-11";
import { Sample12 } from "./sample-12";
import { Sample13 } from "./sample-13";

export function SamplesGrid() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const bgRgb = Color(bg).rgb().round().array();
  const fgRgb = Color(fg).rgb().round().array();

  return (
    <ResponsiveMasonry
      className={css({ "& article": { border: "1px solid", borderColor: "border-secondary" } })}
      columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}
      style={{ [fgVar as string]: fgRgb.join(" "), [bgVar as string]: bgRgb.join(" ") }}
    >
      <Masonry gutter="20px">
        <Sample1 />
        <Sample2 />
        <Sample3 />
        <Sample4 />
        <Sample5 />
        <Sample6 />
        <Sample7 />
        <Sample8 />
        <Sample9 />
        <Sample11 />
        <Sample12 />
        <Sample13 />
      </Masonry>
    </ResponsiveMasonry>
  );
}
