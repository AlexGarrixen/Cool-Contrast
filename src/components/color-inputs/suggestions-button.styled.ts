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

  dialogBody: css({
    px: "6",
    py: "6",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "5",
  }),

  suggestions: css({ gridTemplateColumns: "2" }),

  suggestionsHeading: css({ fontWeight: "500", textStyle: "body-lg", mb: "4" }),
};
