import { css } from "@root/styled-system/css";

import { Icons } from "@/components/icons-lib";

const classes = {
  root: css({
    px: "6",
    py: "4",
    display: "flex",
    gap: "2",
    bgColor: "bg-primary",
    borderBottom: "1px solid",
    borderColor: "border-secondary",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  dots: css({
    display: "flex",
    gap: "2",
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

  btn: css({ cursor: "pointer" }),
};

export function WindowMockup({ onClickExpand }: { onClickExpand?: () => void }) {
  return (
    <section className={classes.root}>
      <div className={classes.dots}>
        <span className={classes.windowDot} />
        <span className={classes.windowDot} />
        <span className={classes.windowDot} />
      </div>
      <div>
        <button className={classes.btn} type="button" onClick={onClickExpand}>
          <Icons.Expand />
        </button>
      </div>
    </section>
  );
}
