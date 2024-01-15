"use client";

import { useMediaQuery } from "@uidotdev/usehooks";

import { Suggestions } from "@/components/suggestions";

export default function AsideSuggestions() {
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  return isLargeDevice ? <Suggestions /> : null;
}
