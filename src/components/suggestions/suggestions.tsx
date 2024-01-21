"use client";

import { useAtomValue, useAtom } from "jotai";
import { cx } from "@root/styled-system/css";

import { background, foreground, contrastRelation } from "@/store";
import { createSuggestions } from "@/lib/contrast-suggestions";

import classes from "./suggestions.styled";

interface SuggestionsProps extends Pick<SuggestionItemProps, "onApply"> {
  className?: string;
  type: "foreground" | "background";
}

type Suggestions = ReturnType<typeof createSuggestions>;

export function Suggestions({ onApply, className, type }: SuggestionsProps) {
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

  function handleOnApply(color: string) {
    isFg ? setFg(color) : setBg(color);
    onApply?.(color);
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
          textColor={isFg ? bg : fg}
          onApply={handleOnApply}
        />
      ))}
    </div>
  );
}

interface SuggestionItemProps {
  contrast: string;
  color: string;
  textColor: string;
  onApply?: (color: string) => void;
}

function SuggestionItem({ contrast, color, textColor, onApply }: SuggestionItemProps) {
  const onClickApply = () => onApply?.(color);

  return (
    <article className={classes.suggestion}>
      <div className={classes.suggestionPreview} style={{ background: color }}>
        <span style={{ color: textColor }}>Aa</span>
      </div>
      <div className={classes.suggestionContent}>
        <button className={classes.suggestionBtn} type="button" onClick={onClickApply}>
          Apply
        </button>
        <span className={classes.suggestionContrast}>{contrast}</span>
      </div>
    </article>
  );
}
