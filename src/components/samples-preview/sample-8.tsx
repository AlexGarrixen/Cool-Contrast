import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { cssFgVar, applyStyle } from "./utils";

const classes = {
  root: stack({ gap: "16", p: "6", rounded: "xl", textAlign: "left" }),
  subHeading: css({ textStyle: "body-base", mb: "2" }),
  price: css({ textStyle: "display-lg", fontWeight: "bold" }),
  chart: css({ width: "100%" }),
};

export function Sample8() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div>
        <p className={classes.subHeading} style={applyStyle("color")}>
          This month spending
        </p>
        <p className={classes.price} style={applyStyle("color")}>
          $780.5
        </p>
      </div>
      <Chart />
    </article>
  );
}

function Chart() {
  return (
    <svg className={classes.chart} fill="none" height="146" viewBox="0 0 348 146" width="348">
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59054"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 328.819 145.578)"
        width="145.578"
        x="328.819"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59057"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 328.819 145.578)"
        width="34.7148"
        x="328.819"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.181"
        rx="9.59048"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 274.016 145.578)"
        width="145.578"
        x="274.016"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59054"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 274.016 145.578)"
        width="132.14"
        x="274.016"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59053"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 219.213 145.578)"
        width="145.578"
        x="219.213"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.181"
        rx="9.59052"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 219.213 145.578)"
        width="100.785"
        x="219.213"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59054"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 164.409 145.578)"
        width="145.578"
        x="164.409"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59056"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 164.409 145.578)"
        width="75.0287"
        x="164.409"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59054"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 109.606 145.578)"
        width="145.578"
        x="109.606"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59055"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 109.606 145.578)"
        width="119.822"
        x="109.606"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59055"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 54.8032 145.578)"
        width="145.578"
        x="54.8032"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59056"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 54.8032 145.578)"
        width="60.4709"
        x="54.8032"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59055"
        style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
        transform="rotate(-90 0 145.578)"
        width="145.578"
        y="145.578"
      />
      <rect
        fill="currentColor"
        height="19.1811"
        rx="9.59055"
        style={applyStyle("color", { fromVar: cssFgVar })}
        transform="rotate(-90 0 145.578)"
        width="86.227"
        y="145.578"
      />
    </svg>
  );
}
