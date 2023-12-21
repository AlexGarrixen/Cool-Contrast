import { css } from "@root/styled-system/css";

export default {
  colorPreview: css({
    w: "6",
    h: "6",
    display: "inline-block",
    border: "1px solid",
    borderColor: "border-secondary",
    rounded: "999px",
    shadow: "xs",
  }),

  settings: css({
    color: "fg-primary",
    borderLeft: "1px solid",
    borderColor: "border-secondary",
    pl: "4",
    my: "2",
    display: "inline-block",
    cursor: "pointer",
  }),

  icon: css({ fontSize: "icon-20" }),
};
