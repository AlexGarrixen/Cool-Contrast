import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }),

  feedback: css({
    textStyle: "body-lg",
    mb: "1",
    fontWeight: "500",
    display: "block",
    textTransform: "capitalize",
  }),

  contrastRatio: css({ textStyle: "display-xl", fontWeight: "bold", display: "block" }),

  checkIcon: css({ fontSize: "icon-32" }),
};
