import { css } from "@root/styled-system/css";

export default {
  root: css({ display: "grid", gridTemplateColumns: "1", gap: "5" }),

  suggestion: css({
    border: "1px solid",
    borderColor: "border-secondary",
    rounded: "lg",
    overflow: "hidden",
  }),

  suggestionPreviews: css({ display: "flex" }),

  suggestionPreview: css({
    aspectRatio: "3/2",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:first-child": {
      borderRight: "1px solid",
      borderColor: "border-secondary",
    },
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
