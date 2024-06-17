import { css } from "@root/styled-system/css";

export default {
  root: css({
    backgroundColor: "bg-primary",
    shadow: "2xl",
    rounded: "lg",
    border: "1px solid",
    borderColor: "border-secondary",
    width: "64",
    overflow: "hidden",
    p: "4",
  }),

  picker: css({
    width: "100%!",
    height: "170px!",
  }),

  colorModes: css({
    position: "relative",
    mb: "3",
    display: "flex",
    justifyContent: "space-between",
    "& > span": { fontWeight: "600" },
  }),

  channels: css({ display: "grid", gap: "3", mt: "5" }),

  select: css({ outline: "none", textTransform: "capitalize" }),
};
