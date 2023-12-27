import { css } from "@root/styled-system/css";

export default {
  popoverContent: css({
    backgroundColor: "bg-primary",
    shadow: "2xl",
    rounded: "lg",
    border: "1px solid",
    borderColor: "border-secondary",
    width: "64",
    overflow: "hidden",
  }),

  colorModes: css({
    position: "relative",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
    px: "5",
    py: "3",
    display: "flex",
    justifyContent: "space-between",
  }),

  channels: css({ display: "grid", gap: "6", px: "5", py: "6" }),

  select: css({ outline: "none", textTransform: "capitalize" }),

  channelActive: css({ borderColor: "bg-primary-solid!" }),

  preview: css({
    h: "8",
    w: "8",
    rounded: "999px",
    mr: "1",
    border: "1px solid",
    borderColor: "border-secondary",
  }),
};
