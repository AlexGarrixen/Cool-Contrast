import { css } from "@root/styled-system/css";

const classes = {
  root: css({
    px: "6",
    py: "4",
    display: "flex",
    gap: "2",
    bgColor: "bg-secondary",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
  }),

  windowDot: css({
    w: "5",
    h: "5",
    display: "inline-block",
    bgColor: "bg-primary",
    rounded: "xl",
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
