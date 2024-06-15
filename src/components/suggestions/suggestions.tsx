"use client";

import { useAtomValue, useAtom } from "jotai";
import { cx } from "@root/styled-system/css";

import { background, foreground, contrastRelation } from "@/store";
import { createSuggestions } from "@/lib/contrast-suggestions";

import classes from "./suggestions.styled";

interface SuggestionsProps extends Pick<SuggestionItemProps, "onApply"> {
  className?: string;
  type: "foreground" | "background";
  selectedColor?: string;
}

type Suggestions = ReturnType<typeof createSuggestions>;

export function Suggestions({ onApply, className, type, selectedColor }: SuggestionsProps) {
  const [fg, setFg] = useAtom(foreground);
  const [bg, setBg] = useAtom(background);
  const score = useAtomValue(contrastRelation);
  const isFg = type === "foreground";
  const suggestions = getSuggestions();
  const isEmpty = suggestions.length === 0;

  function getSuggestions() {
    const output = createSuggestions({ forColor: isFg ? bg : fg, matchingColor: isFg ? fg : bg });

    return output.filter(
      (sugg) => parseFloat(sugg.contrast) > score.contrast && sugg.color !== (isFg ? fg : bg),
    );
  }

  return isEmpty ? (
    <p className={classes.emptyMsg}>There is nothing more to suggest</p>
  ) : (
    <div className={cx(classes.root, className)}>
      {suggestions.map(({ color, contrast, id }) => (
        <SuggestionItem
          key={id}
          color={color}
          contrast={contrast}
          isSelected={selectedColor === color}
          textColor={isFg ? bg : fg}
          onApply={onApply}
        />
      ))}
    </div>
  );
}

interface SuggestionItemProps {
  contrast: string;
  color: string;
  textColor: string;
  isSelected?: boolean;
  onApply?: (color: string) => void;
}

function SuggestionItem({ contrast, color, textColor, onApply, isSelected }: SuggestionItemProps) {
  const onClickApply = () => onApply?.(color);

  return (
    <button
      className={cx(classes.suggestion, isSelected && classes.suggestionSelected)}
      type="button"
      onClick={onClickApply}
    >
      <div className={classes.suggestionPreview} style={{ background: color }}>
        <span style={{ color: textColor }}>{contrast}</span>
      </div>
      <div className={classes.suggestionColorValue}>
        <p>{color}</p>
      </div>
    </button>
  );
}
