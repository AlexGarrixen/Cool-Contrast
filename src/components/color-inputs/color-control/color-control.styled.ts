import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

export default {
  root: css({ display: "flex", alignItems: "center", flex: 1, width: "100%", gap: "4" }),

  label: css({
    color: "text-secondary",
    display: "block",
    fontWeight: "500",
    mb: "2",
  }),

  content: css({ flex: 1 }),

  preview: css({
    w: "20",
    h: "20",
    shadow: "sm",
    rounded: "xl",
    border: "1px solid",
    borderColor: "border-secondary",
    flexShrink: 0,
  }),

  actions: stack({ gap: "1" }),
};
