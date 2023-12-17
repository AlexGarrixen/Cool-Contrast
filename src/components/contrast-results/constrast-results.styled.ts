import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "5",
    p: "5",
    mt: "5",
    backgroundColor: "bg-primary",
    rounded: "xl",
    shadow: "xs",
    md: {
      flexDirection: "row",
    },
  }),

  levels: css({
    display: "grid",
    gap: "5",
    md: { flex: 1 },
    sm: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
