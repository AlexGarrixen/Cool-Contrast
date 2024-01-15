import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

const classes = {
  suggestion: css({
    border: "1px solid",
    borderColor: "border-secondary",
    rounded: "lg",
    overflow: "hidden",
  }),

  suggestionPreviews: css({ display: "flex" }),

  suggestionPreview: css({
    aspectRatio: "3/2",
    bgColor: "bg-secondary",
    flex: 1,
    "&:first-child": {
      borderRight: "1px solid",
      borderColor: "border-secondary",
    },
  }),

  suggestionContent: css({
    borderTop: "1px solid",
    borderColor: "border-secondary",
    h: "10",
  }),
};

export function AsideSkeleton() {
  return (
    <div className={stack({ gap: "5" })}>
      <SuggestionSkeleton />
      <SuggestionSkeleton />
      <SuggestionSkeleton />
    </div>
  );
}

function SuggestionSkeleton() {
  return (
    <article className={classes.suggestion}>
      <div className={classes.suggestionPreviews}>
        <div className={classes.suggestionPreview} />
        <div className={classes.suggestionPreview} />
      </div>
      <div className={classes.suggestionContent} />
    </article>
  );
}
