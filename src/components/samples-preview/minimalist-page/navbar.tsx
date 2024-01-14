import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { applyStyle } from "../utils";

const classes = {
  root: css({
    height: "20",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  nav: css({
    fontWeight: "bold",
    display: "none",
    lg: {
      display: "flex",
      gap: "6",
    },
  }),

  menu: css({
    fontWeight: "bold",
    lg: {
      display: "none",
    },
  }),
};

export function Navbar() {
  return (
    <section className={cx(container(), classes.root)} style={applyStyle("color")}>
      <svg
        fill="none"
        height="32"
        viewBox="0 0 66 32"
        width="66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2.66666H12V12H2.66663V20H12V29.3333H20V20H29.3333V12H20V2.66666Z"
          fill="currentColor"
        />
        <path
          d="M62.2566 9.40034L56.5997 3.74347L50.0001 10.3431L43.4004 3.74347L37.7435 9.40034L44.3432 16L37.7435 22.5997L43.4004 28.2565L50.0001 21.6569L56.5997 28.2565L62.2566 22.5997L55.6569 16L62.2566 9.40034Z"
          fill="currentColor"
        />
      </svg>
      <div>
        <span className={classes.menu}>MENU</span>
        <ul className={classes.nav}>
          <li>HOME</li>
          <li>TOURS</li>
          <li>MUSIC</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </section>
  );
}
