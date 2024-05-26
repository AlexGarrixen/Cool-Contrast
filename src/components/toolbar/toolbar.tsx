import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { SwitchTabBtn } from "./switch-tab";
import { ComplianceDetails } from "./compliance-details";
import { RandomButton } from "./random-btn";
import { ColorSelectors } from "./color-selectors";

const classes = {
  root: css({
    overflowX: "auto",
    position: "sticky",
    top: 16,
    py: 5,
    mt: 4,
    bgColor: "bg-primary",
    zIndex: 10,
    "& > div": {
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
    },
  }),

  complianceWrapper: css({ display: "flex", alignItems: "center", gap: 8 }),

  complianceSelectors: css({ display: "flex", alignItems: "center", gap: 4 }),
};

export function Toolbar() {
  return (
    <section className={classes.root}>
      <div className={container()}>
        <SwitchTabBtn />
        <div className={classes.complianceWrapper}>
          <ComplianceDetails />
          <ColorSelectors />
          <div>
            <RandomButton />
          </div>
        </div>
      </div>
    </section>
  );
}
