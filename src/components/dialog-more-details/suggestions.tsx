"use client";

import { useAtom } from "jotai";

import { Suggestions as ColorSuggestions } from "@/components/suggestions";
import { selectedBgSuggestion, selectedFgSuggestion } from "@/store";

import { classes } from "./suggestions.styled";

export function Sugesstions() {
  const [selectedFg, setSelectedFg] = useAtom(selectedFgSuggestion);
  const [selectedBg, setSelectedBg] = useAtom(selectedBgSuggestion);

  const onSelect = (type: "fg" | "bg") => (color: string) => {
    if (type === "fg") {
      const nextColor = color === selectedFg ? "" : color;

      setSelectedFg(nextColor);
    } else {
      const nextColor = color === selectedBg ? "" : color;

      setSelectedBg(nextColor);
    }
  };

  return (
    <section className={classes.root}>
      <div>
        <h4 className={classes.title}>Background Suggestions</h4>
        <ColorSuggestions
          className={classes.suggestionsGrid}
          selectedColor={selectedBg}
          type="background"
          onApply={onSelect("bg")}
        />
      </div>
      <div>
        <h4 className={classes.title}>Foreground Suggestions</h4>
        <ColorSuggestions
          className={classes.suggestionsGrid}
          selectedColor={selectedFg}
          type="foreground"
          onApply={onSelect("fg")}
        />
      </div>
    </section>
  );
}
