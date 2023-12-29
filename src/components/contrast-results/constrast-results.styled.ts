import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "6",
    p: "5",
    mt: "5",
    backgroundColor: "bg-primary",
    rounded: "xl",
    shadow: "xs",
    md: {
      flexDirection: "row",
      alignItems: "center",
    },
  }),

  levels: css({
    display: "grid",
    rowGap: "5",
    columnGap: "12",
    md: { flex: 1 },
    sm: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
