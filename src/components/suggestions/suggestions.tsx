"use client";

import { useAtomValue } from "jotai";

import { background, foreground, contrastRelation } from "@/store";
import { createContrastSuggestions } from "@/lib/contrast-suggestions";

import classes from "./suggestions.styled";

interface SuggestionProps extends Pick<SuggestionItemProps, "onApply"> {
  className?: string;
}

export function Suggestions({ onApply, className }: SuggestionProps) {
  const fg = useAtomValue(foreground);
  const bg = useAtomValue(background);
  const score = useAtomValue(contrastRelation);
  const suggestions = createContrastSuggestions(bg, fg).filter(
    (result) => parseFloat(result.contrast) > score.contrast,
  );
  const isEmpty = suggestions.length === 0;

  return (
    <div className={`${classes.root} ${className ?? ""}`}>
      {isEmpty ? (
        <p>There is nothing more to suggest</p>
      ) : (
        <>
          {suggestions.map((item) => (
            <SuggestionItem key={item.id} {...item} onApply={onApply} />
          ))}
        </>
      )}
    </div>
  );
}

interface SuggestionItemProps {
  contrast: string;
  bg: string;
  fg: string;
  onApply?: (bg: string, fg: string) => void;
}

function SuggestionItem({ contrast, fg, bg, onApply }: SuggestionItemProps) {
  const onClickApply = () => onApply?.(bg, fg);

  return (
    <article className={classes.suggestion}>
      <div className={classes.suggestionPreviews}>
        <div className={classes.suggestionPreview} style={{ background: bg }}>
          <span style={{ color: fg }}>B</span>
        </div>
        <div className={classes.suggestionPreview} style={{ background: fg }}>
          <span style={{ color: bg }}>T</span>
        </div>
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
