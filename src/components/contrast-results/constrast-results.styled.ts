import { css } from "@root/styled-system/css";

export default {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "8",
    mt: "8",
    backgroundColor: "bg-primary",
  }),

  levels: css({
    display: "grid",
    rowGap: "5",
    columnGap: "8",
    md: { flex: 1 },
    sm: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
