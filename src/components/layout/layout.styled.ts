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
    pt: 4,
    backgroundImage: "radial-gradient(circle, rgba(0 0 0 / .10) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    backgroundPosition: "center",
  }),
};
