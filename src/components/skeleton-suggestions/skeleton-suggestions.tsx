import { css, cx } from "@root/styled-system/css";
import { grid } from "@root/styled-system/patterns";

const classes = {
  suggestion: css({
    border: "1px solid",
    borderColor: "border-secondary",
    rounded: "lg",
    overflow: "hidden",
  }),

  suggestionPreview: css({
    aspectRatio: "1/1",
    bgColor: "bg-secondary",
  }),

  suggestionContent: css({
    borderTop: "1px solid",
    borderColor: "border-secondary",
    h: "10",
  }),
};

export function SkeletonSuggestions({ className }: { className?: string }) {
  return (
    <div className={cx(grid({ gap: "5" }), className)}>
      <SuggestionSkeleton />
      <SuggestionSkeleton />
      <SuggestionSkeleton />
    </div>
  );
}

function SuggestionSkeleton() {
  return (
    <article className={classes.suggestion}>
      <div className={classes.suggestionPreview} />
      <div className={classes.suggestionContent} />
    </article>
  );
}
