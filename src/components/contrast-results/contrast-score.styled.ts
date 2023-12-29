import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    pr: { md: "6" },
    pb: { base: "6", md: "0" },
    width: { base: "100%", md: "30%" },
    borderRight: { md: "1px solid" },
    borderBottom: { base: "1px solid", md: "none" },
    borderColor: "border-secondary!",
  }),

  subheading: css({ textStyle: "body-xs", color: "text-primary", mb: "8" }),

  scoreWrapper: css({
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
