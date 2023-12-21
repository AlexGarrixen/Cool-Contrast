"use client";

import { useAtomValue } from "jotai";

import { wcagLevelsResult } from "@/store";

import { ContrastScore } from "./contrast-score";
import { ContrastLevel } from "./contrast-level";
import classes from "./constrast-results.styled";

export function ContrastResults() {
  const { passAAALargeText, passAAANormalText, passAALargeText, passAANormalText } =
    useAtomValue(wcagLevelsResult);

  return (
    <div className={classes.root}>
      <ContrastScore />
      <ul className={classes.levels}>
        <ContrastLevel contrast="AA - 4.5:1" pass={passAANormalText} textType="normal" />
        <ContrastLevel contrast="AA - 3:1" pass={passAALargeText} textType="large" />
        <ContrastLevel contrast="AAA - 7:1" pass={passAAANormalText} textType="normal" />
        <ContrastLevel contrast="AAA - 4.5:1" pass={passAAALargeText} textType="large" />
      </ul>
    </div>
  );
}
