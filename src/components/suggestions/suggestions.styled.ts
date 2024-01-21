import { css } from "@root/styled-system/css";

export default {
  root: css({ display: "grid", gap: "5" }),

  suggestion: css({
    border: "1px solid",
    borderColor: "border-secondary",
    rounded: "lg",
    overflow: "hidden",
  }),

  emptyMsg: css({ color: "text-secondary" }),

  suggestionPreview: css({
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    textStyle: "display-xs",
    justifyContent: "center",
    "& > span": {
      textStyle: "body-lg",
    },
  }),

  suggestionContent: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid",
    borderColor: "border-secondary",
    px: "4",
    py: "3",
  }),

  suggestionBtn: css({ fontWeight: "bold", textStyle: "body-base", cursor: "pointer" }),

  suggestionContrast: css({ textStyle: "body-base", color: "text-secondary" }),
};
