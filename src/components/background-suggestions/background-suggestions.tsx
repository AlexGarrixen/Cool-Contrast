"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { css } from "@root/styled-system/css";

import { Suggestions } from "@/components/suggestions";
import { SkeletonSuggestions } from "@/components/skeleton-suggestions";

export default function BackgroundSuggestions() {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  return isLargeDevice ? (
    <Suggestions className={css({ gridTemplateColumns: 2 })} type="background" />
  ) : null;
}

export function Skeleton() {
  return <SkeletonSuggestions className={css({ gridTemplateColumns: 2 })} />;
}
