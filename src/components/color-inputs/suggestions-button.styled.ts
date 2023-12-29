import { css } from "@root/styled-system/css";

export default {
  dialogHeader: css({
    padding: "6",
    textStyle: "display-xs",
    color: "text-primary",
    fontWeight: "bold",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  dialogOverlay: css({
    backgroundColor: "transparent",
    backdropFilter: "blur(2px)",
    position: "fixed",
    inset: 0,
  }),

  dialogRoot: css({
    backgroundColor: "bg-primary",
    border: "1px solid",
    borderColor: "border-secondary",
    maxW: { base: "calc(100vw - 24px)", sm: "breakpoint-sm" },
    maxH: "64vh",
    width: "100%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    rounded: "lg",
    shadow: "3xl",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  }),

  dialogBody: css({ px: "6", py: "6", overflowY: "auto" }),

  suggestionsGrid: css({ display: "grid", gridTemplateColumns: { sm: "2" }, gap: "5" }),

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
