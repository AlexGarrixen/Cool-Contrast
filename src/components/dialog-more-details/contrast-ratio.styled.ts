import { css } from "@root/styled-system/css";

export const classes = {
  title: css({ textStyle: "display-xs", fontWeight: "500", mb: "5", color: "text-primary" }),

  scoreWrapper: css({
    display: "flex",
    gap: "2",
    alignItems: "end",
    justifyContent: "space-between",
    mb: "5",
  }),

  score: css({ textStyle: "display-xs", fontWeight: "500" }),

  feedback: css({ textStyle: "body-lg", ml: "2" }),

  colorSelectors: css({ display: "flex", gap: "3" }),

  tableWrapper: css({ maxW: "100%", overflowX: "auto" }),

  table: css({
    w: "100%",
    minW: "100%",
    tableLayout: "auto",
    "& thead th": {
      textAlign: "left",
      textStyle: "body-sm",
      bgColor: "bg-secondary",
      whiteSpace: "nowrap",
      px: "6",
      h: "10",
      color: "text-secondary",
      _first: { roundedLeft: "lg" },
      _last: { roundedRight: "lg" },
    },
    "& tbody td": {
      textStyle: "body-sm",
      py: "4",
      px: "6",
      _first: {
        whiteSpace: "nowrap",
      },
      "& > div": {
        display: "flex",
        alignItems: "center",
        gap: "2",
      },
    },
    "& tbody tr:last-child td": {
      pb: "0",
    },
  }),
};
