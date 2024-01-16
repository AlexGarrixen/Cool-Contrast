import { css } from "@root/styled-system/css";

export default {
  levelContainer: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),

  textType: css({ color: "text-secondary", textStyle: "body-xs", mb: "2" }),

  contrast: css({ color: "text-primary", textStyle: "display-xs", fontWeight: "bold" }),

  checkIcon: css({ color: "fg-success", fontSize: "icon-20" }),

  closeIcon: css({ color: "fg-error", fontSize: "icon-20" }),
};
