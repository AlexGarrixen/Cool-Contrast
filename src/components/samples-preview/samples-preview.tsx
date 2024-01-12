import { css } from "@root/styled-system/css";

import { SamplesGrid } from "./samples-grid";

const classes = {
  root: css({ mt: "16", mb: "8" }),
};

export function SamplesPreview() {
  return (
    <section className={classes.root}>
      <SamplesGrid />
    </section>
  );
}
