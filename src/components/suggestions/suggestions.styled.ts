import { css } from "@root/styled-system/css";

export default {
  root: css({ display: "grid", gap: "5" }),

  emptyMsg: css({ color: "text-secondary" }),

  suggestion: css({
    rounded: "md",
    overflow: "hidden",
    borderWidth: "1px",
    borderColor: "border-secondary",
    cursor: "pointer",
    _hover: {
      borderColor: "neutral.400",
    },
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
    borderTop: "1px solid",
    borderTopColor: "border-secondary",
    "& p": { textAlign: "center", textStyle: "body-sm" },
  }),

  suggestionSelected: css({
    outline: "2px solid",
    outlineColor: "neutral.700",
  }),
};
