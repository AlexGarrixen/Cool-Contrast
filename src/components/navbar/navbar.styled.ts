import { css } from "@root/styled-system/css";
import { stack, container } from "@root/styled-system/patterns";

export default {
  header: container(),
  nav: css({
    display: "flex",
    rounded: "xl",
    shadow: "xs",
    justifyContent: "space-between",
    p: "5",
    color: "text-primary",
    mt: "6",
    backgroundColor: "bg-primary",
  }),
  logo: css({ textStyle: "display-xs", fontWeight: "bold" }),
  rightContent: stack({ gap: "4", direction: "row", align: "center" }),
  support: css({ display: "none", md: { display: "block" } }),
  icon: css({ fontSize: "icon-24" }),
};
