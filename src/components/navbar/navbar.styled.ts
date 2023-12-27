import { css } from "@root/styled-system/css";
import { stack, container } from "@root/styled-system/patterns";

export default {
  header: container(),
  nav: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    pb: "3",
    color: "text-primary",
    mt: "6",
    gap: "5",
  }),
  logo: css({ textStyle: "display-xs", fontWeight: "bold", display: "flex", alignItems: "center" }),
  rightContent: stack({ gap: "4", direction: "row", align: "center" }),
  leftIcon: css({ mr: "2" }),
  icon: css({ fontSize: "icon-24" }),
};
