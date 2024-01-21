import type { ReactNode } from "react";

import { css, cx } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import BgSuggestions from "@/components/background-suggestions";
import FgSuggestions from "@/components/foreground-suggestions";
import { ColorInputs } from "@/components/color-inputs";
import { ContrastResults } from "@/components/contrast-results";

const classes = {
  root: stack({ gap: "6" }),

  divider: css({
    h: "1px",
    bgColor: "border-primary",
    w: "100%",
  }),

  hiddenOnMobile: css({ display: "none", lg: { display: "block" } }),

  panelTitle: css({ fontWeight: "500", textStyle: "display-xs", mb: "6" }),
};

export function Aside() {
  return (
    <div className={classes.root}>
      <Panel label="Contrast Relation">
        <ContrastResults />
      </Panel>
      <Divider />
      <Panel label="Color Inputs">
        <ColorInputs />
      </Panel>
      <Divider className={classes.hiddenOnMobile} />
      <Panel className={classes.hiddenOnMobile} label="Background suggestions">
        <BgSuggestions />
      </Panel>
      <Divider className={classes.hiddenOnMobile} />
      <Panel className={classes.hiddenOnMobile} label="Text suggestions">
        <FgSuggestions />
      </Panel>
    </div>
  );
}

function Panel({
  label,
  children,
  className,
}: {
  label: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className={classes.panelTitle}>{label}</div>
      <div>{children}</div>
    </section>
  );
}

function Divider({ className }: { className?: string }) {
  return <div className={cx(classes.divider, className)} />;
}
