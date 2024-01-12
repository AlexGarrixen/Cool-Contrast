import { css } from "@root/styled-system/css";

export default {
  header: css({
    h: "16",
    bgColor: "bg-primary",
    textStyle: "display-xs",
    color: "text-primary",
    fontWeight: "500",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
    display: "flex",
    alignItems: "center",
    px: { base: "4", lg: "8" },
    position: "sticky",
    top: 0,
  }),

  headerIcon: css({ fontSize: "icon-24", mr: "2" }),

  body: css({ py: "6", overflowY: "auto", px: { base: "4", lg: "8" } }),
};
