import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

export default {
  nav: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "text-primary",
    gap: "5",
  }),

  logo: css({
    textStyle: "display-xs",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  }),

  logoIcon: css({ marginRight: "2" }),

  rightContent: stack({ gap: "5", direction: "row", align: "center" }),

  leftIcon: css({ sm: { marginRight: "2" } }),

  link: css({ display: "inline-flex", fontWeight: "500" }),

  icon: css({ fontSize: "icon-24" }),

  btnLabel: css({ display: "none", sm: { display: "block" } }),
};
