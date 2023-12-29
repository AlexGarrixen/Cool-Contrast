import { css } from "@root/styled-system/css";

import { SamplesGrid } from "./samples-grid";

const classes = {
  root: css({ my: "5", bgColor: "bg-primary", p: "5", rounded: "xl", shadow: "xs" }),
};

export function SamplesPreview() {
  return (
    <section className={classes.root}>
      <SamplesGrid />
    </section>
  );
}
