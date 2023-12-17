import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "3",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border-secondary",
    rounded: "lg",
  }),

  textType: css({ color: "text-secondary", textStyle: "body-xs", mb: "2" }),

  contrast: css({ color: "text-primary", textStyle: "display-xs", fontWeight: "bold" }),

  checkIcon: css({ color: "fg-success", fontSize: "icon-24" }),

  closeIcon: css({ color: "fg-error", fontSize: "icon-24" }),
};
