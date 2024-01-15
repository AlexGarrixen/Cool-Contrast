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
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    lg: {
      flexDirection: "row",
    },
  }),

  content: css({
    flex: 1,
    width: "100%",
    bgColor: "bg-tertiary",
  }),

  aside: css({
    p: "6",
    overflow: "auto",
    width: "100%",
    order: -1,

    lg: {
      borderRight: "1px solid",
      borderColor: "border-secondary",
      width: "400px",
      top: "16",
      position: "sticky",
      height: "calc(100vh - 64px)",
    },
  }),
};
