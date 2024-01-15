import { css } from "@root/styled-system/css";

const classes = {
  root: css({
    px: "6",
    py: "4",
    display: "flex",
    gap: "2",
    bgColor: "bg-primary",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
  }),

  windowDot: css({
    w: "5",
    h: "5",
    display: "inline-block",
    rounded: "xl",

    "&:nth-child(1)": { bgColor: "error.500" },
    "&:nth-child(2)": { bgColor: "warning.500" },
    "&:nth-child(3)": { bgColor: "success.500" },
  }),
};

export function WindowMockup() {
  return (
    <section className={classes.root}>
      <span className={classes.windowDot} />
      <span className={classes.windowDot} />
      <span className={classes.windowDot} />
    </section>
  );
}
