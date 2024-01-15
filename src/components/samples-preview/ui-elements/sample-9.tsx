import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";

import { ChartBarFill } from "@/components/icons";

import { cssFgVar, applyStyle, cssBgVar } from "../utils";

const classes = {
  root: stack({ gap: "6", p: "6", pb: "0", rounded: "xl", overflow: "hidden" }),
  icon: circle({ size: "8", fontSize: "icon-20" }),
  topContent: css({ display: "flex", justifyContent: "end" }),
  content: css({ textAlign: "center" }),
  subHeading: css({ textStyle: "body-base", mb: "2" }),
  price: css({ textStyle: "display-lg", fontWeight: "bold" }),
  chartWrapper: css({ display: "flex", justifyContent: "center", mb: "-18%" }),
  chart: css({ width: "150%", flexShrink: 0 }),
  badge: css({
    py: "1",
    px: "3",
    textStyle: "body-sm",
    mt: "4",
    display: "inline-block",
    rounded: "999px",
    fontWeight: "500",
  }),
};

export function Sample9() {
  return (
    <article className={classes.root} style={applyStyle("bg")}>
      <div className={classes.topContent}>
        <span
          className={classes.icon}
          style={{
            ...applyStyle("bg", { fromVar: cssFgVar }),
            ...applyStyle("color", { fromVar: cssBgVar }),
          }}
        >
          <ChartBarFill />
        </span>
      </div>
      <div className={classes.content}>
        <p className={classes.subHeading} style={applyStyle("color")}>
          Earnings for this month
        </p>
        <p className={classes.price} style={applyStyle("color")}>
          $780.5
        </p>
        <span
          className={classes.badge}
          style={{
            ...applyStyle("bg", { fromVar: cssFgVar }),
            ...applyStyle("color", { fromVar: cssBgVar }),
          }}
        >
          +2.45%
        </span>
      </div>
      <div className={classes.chartWrapper}>
        <Chart />
      </div>
    </article>
  );
}

function Chart() {
  return (
    <svg
      className={classes.chart}
      fill="none"
      height="208"
      viewBox="0 0 604 208"
      width="604"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.3319 59.0777C73.4002 67.4777 54.8245 60.2444 47.2782 55.5777L2 190.078L598.453 205.078C602.226 143.911 604.896 19.2777 585.392 10.0777C561.011 -1.4223 548.821 20.0777 544.467 26.5777C540.113 33.0777 525.311 38.0777 513.121 36.0777C500.93 34.0777 474.808 59.0777 456.523 65.0777C438.238 71.0777 412.986 38.0777 401.667 32.5777C390.347 27.0778 380.769 39.0777 376.416 38.0777C372.062 37.0777 353.776 5.5777 340.715 6.0777C327.654 6.5777 316.335 36.0777 306.757 32.5777C297.179 29.0778 286.73 55.5777 254.513 73.0777C222.296 90.5777 209.235 6.57772 191.82 2.57772C174.405 -1.42228 169.181 16.0777 151.766 32.5777C134.352 49.0777 126.515 36.5777 121.291 32.5777C116.066 28.5777 104.747 48.5777 87.3319 59.0777Z"
        fill="url(#paint0_linear_119_1190)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        style={applyStyle("color")}
      />
      <path
        d="M87.3319 59.0777C73.4002 67.4777 54.8245 60.2444 47.2782 55.5777L2 190.078L598.453 205.078C602.226 143.911 604.896 19.2777 585.392 10.0777C561.011 -1.4223 548.821 20.0777 544.467 26.5777C540.113 33.0777 525.311 38.0777 513.121 36.0777C500.93 34.0777 474.808 59.0777 456.523 65.0777C438.238 71.0777 412.986 38.0777 401.667 32.5777C390.347 27.0778 380.769 39.0777 376.416 38.0777C372.062 37.0777 353.776 5.5777 340.715 6.0777C327.654 6.5777 316.335 36.0777 306.757 32.5777C297.179 29.0778 286.73 55.5777 254.513 73.0777C222.296 90.5777 209.235 6.57772 191.82 2.57772C174.405 -1.42228 169.181 16.0777 151.766 32.5777C134.352 49.0777 126.515 36.5777 121.291 32.5777C116.066 28.5777 104.747 48.5777 87.3319 59.0777Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        style={applyStyle("color")}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_119_1190"
          x1="302.403"
          x2="302.403"
          y1="-17.5"
          y2="164.578"
        >
          <stop stopColor="currentColor" stopOpacity="0.35" style={applyStyle("color")} />
          <stop
            offset="0.72165"
            stopColor="currentColor"
            stopOpacity="0.1"
            style={applyStyle("color", { fromVar: cssBgVar })}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
