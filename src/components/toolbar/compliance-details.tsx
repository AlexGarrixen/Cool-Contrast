"use client";

import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { css, cx } from "@root/styled-system/css";
import { token } from "@root/styled-system/tokens";

import { contrastRelation } from "@/store";
import { Icons } from "@/components/icons-lib";
import { contrastGuidelines } from "@/lib/wcag-text-contrast";

const classes = {
  root: css({ display: "flex", flexShrink: 0, gap: 6 }),

  complianceSubheading: css({
    textStyle: "body-xs",
    fontWeight: "500",
    color: "text-secondary",
    display: "block",
    mb: 1,
  }),

  complianceResult: css({
    textStyle: "body-base",
    fontWeight: "medium",
    display: "inline-flex",
    "& > svg": { mr: 1 },
  }),

  complianceLevels: css({ display: "flex", gap: 2 }),

  pass: css({ color: "text-success" }),

  notPass: css({ color: "text-error" }),
};

export function ComplianceDetails() {
  const { contrast, feedback } = useAtomValue(contrastRelation);
  const passAA = contrast >= contrastGuidelines.AALevel.normalText;
  const passAAA = contrast >= contrastGuidelines.AAALevel.normalText;
  const complianceFeedback = feedback.replace("-", " ");
  const statusColor = useMemo(() => {
    if (feedback === "poor") return token("colors.text-error");

    return token("colors.text-success");
  }, [feedback]);

  return (
    <div className={classes.root}>
      <div>
        <span className={classes.complianceSubheading}>Ratio Contrast</span>
        <p className={classes.complianceResult} style={{ color: statusColor }}>
          {contrast.toFixed(2)} {complianceFeedback}
        </p>
      </div>
      <div>
        <span className={classes.complianceSubheading}>WCAG Compliance</span>
        <div className={classes.complianceLevels}>
          <p className={cx(classes.complianceResult, passAA ? classes.pass : classes.notPass)}>
            {passAA ? <Icons.CheckCircle /> : <Icons.XCircle />}
            AA
          </p>
          <p className={cx(classes.complianceResult, passAAA ? classes.pass : classes.notPass)}>
            {passAAA ? <Icons.CheckCircle /> : <Icons.XCircle />}
            AAA
          </p>
        </div>
      </div>
    </div>
  );
}
