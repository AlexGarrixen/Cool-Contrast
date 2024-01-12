"use client";

import type { ReactNode } from "react";

import { useMediaQuery } from "@uidotdev/usehooks";

import { Suggestions } from "@/components/suggestions";
import { LightFill } from "@/components/icons";

import classes from "./aside-suggestions.styled";

export function Panel({ children }: { children?: ReactNode }) {
  return (
    <>
      <header className={classes.header}>
        <LightFill className={classes.headerIcon} />
        Suggestions
      </header>
      <div className={classes.body}>{children}</div>
    </>
  );
}

export default function AsideSuggestions() {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  return isLargeDevice ? (
    <Panel>
      <Suggestions />
    </Panel>
  ) : null;
}
