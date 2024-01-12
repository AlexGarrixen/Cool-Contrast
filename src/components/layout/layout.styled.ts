import { css } from "@root/styled-system/css";

export default {
  header: css({
    height: "16",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
    position: "sticky",
    zIndex: "10",
    top: 0,
    bg: "bg-primary",
  }),

  main: css({
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: { lg: "12" },
  }),

  content: css({
    gridColumn: { lg: "9" },
  }),

  aside: css({
    gridColumn: "3",
    borderLeft: "1px solid",
    borderColor: "border-secondary",
    overflow: "auto",
    display: "none",

    lg: {
      top: "16",
      display: "block",
      position: "sticky",
      height: "calc(100vh - 64px)",
    },
  }),
};
