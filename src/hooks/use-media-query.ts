"use client";

import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [isMatchMedia, setIsMatchMedia] = useState(false);

  const handlerMatchMedia = useCallback(() => {
    const matchMedia = window.matchMedia(query);

    setIsMatchMedia(matchMedia.matches);

    return matchMedia;
  }, [query]);

  useEffect(() => {
    const matchMedia = handlerMatchMedia();

    matchMedia.addEventListener("change", handlerMatchMedia);

    return () => {
      matchMedia.removeEventListener("change", handlerMatchMedia);
    };
  }, [handlerMatchMedia]);

  return isMatchMedia;
}
