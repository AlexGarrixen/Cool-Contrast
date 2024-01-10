import { css } from "@root/styled-system/css";

export default {
  root: css({ display: "flex", alignItems: "center", flex: 1, width: "100%", gap: "4" }),

  label: css({
    color: "text-primary",
    fontWeight: "bold",
    display: "block",
    mb: "3",
  }),

  rightContent: css({ flex: 1 }),

  preview: css({
    w: "20",
    h: "20",
    shadow: "sm",
    rounded: "xl",
    border: "1px solid",
    borderColor: "border-secondary",
  }),
};
