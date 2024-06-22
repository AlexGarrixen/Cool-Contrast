import { css } from "@root/styled-system/css";

export const classes = {
  root: css({ display: "flex", flexDirection: "column", gap: "12" }),

  title: css({ textStyle: "display-xs", mb: "5", fontWeight: "500" }),

  suggestion: css({
    rounded: "md",
    overflow: "hidden",
    borderWidth: "1px",
    borderColor: "border-secondary",
  }),

  suggestionPreview: css({
    aspectRatio: "3/2",
    bgColor: "blue",
    p: "3",
    display: "flex",
    justifyContent: "flex-end",
    "& span": { textStyle: "body-sm" },
  }),

  suggestionColorValue: css({
    px: "4",
    py: "2",
    "& p": { textAlign: "center", textStyle: "body-sm" },
  }),

  suggestionsGrid: css({
    gridTemplateColumns: { base: "2", md: "3" },
  }),
};
