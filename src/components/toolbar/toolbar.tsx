"use client";

import { useEffect, useRef } from "react";
import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { SwitchTabBtn } from "./switch-tab";
import { ComplianceDetails } from "./compliance-details";
import { RandomButton } from "./random-btn";
import { ColorSelectors } from "./color-selectors";
import { MoreButton } from "./more-btn";

const classes = {
  root: css({
    position: "sticky",
    top: 16,
    zIndex: 5,
  }),

  container: css({
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
    py: 5,
    position: "relative",
  }),

  fade: css({
    overflowX: "auto",
    transitionProperty: "background",
    transitionDuration: "150ms",
    _before: {
      position: "absolute",
      content: "''",
      right: 0,
      left: 0,
      zIndex: -1,
      top: "-16px",
      bgGradient: "to-b",
      gradientFrom: "bg-secondary",
      gradientTo: "transparent",
      h: "calc(100% + 16px)",
      pointerEvents: "none",
      userSelect: "none",
    },
  }),

  fadeSolidBg: css({ bgColor: "bg-secondary" }),

  complianceWrapper: css({ display: "flex", alignItems: "center", gap: 8 }),

  complianceSelectors: css({ display: "flex", alignItems: "center", gap: 4 }),

  complianceActions: css({ display: "flex", gap: 4, pr: { base: 4, lg: 0 } }),
};

export function Toolbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    function handler() {
      if (!element) return;

      if (window.scrollY > 48) element.classList.add(classes.fadeSolidBg);
      else element.classList.remove(classes.fadeSolidBg);
    }

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [ref]);

  return (
    <section className={classes.root}>
      <div ref={ref} className={classes.fade}>
        <div className={cx(container(), classes.container)}>
          <SwitchTabBtn />
          <div className={classes.complianceWrapper}>
            <ComplianceDetails />
            <ColorSelectors />
            <div className={classes.complianceActions}>
              <RandomButton />
              <MoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
