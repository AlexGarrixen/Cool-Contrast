import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: "4",
    background: "bg-primary-solid",
    rounded: "lg",
    md: {
      width: "320px",
    },
  }),

  subheading: css({ textStyle: "body-xs", color: "white", mb: "8" }),

  scoreWrapper: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }),

  feedback: css({
    textStyle: "body-lg",
    mb: "2",
    fontWeight: "500",
    display: "block",
    textTransform: "capitalize",
  }),

  contrastRatio: css({ textStyle: "display-xl", fontWeight: "bold", display: "block" }),

  checkIcon: css({ fontSize: "icon-32" }),
};
