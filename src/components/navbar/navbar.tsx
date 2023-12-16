import { GithubFill } from "@/components/icons";

import classes from "./navbar.styled";

export function Navbar() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Inspect Color Contrast</div>
        <div className={classes.rightContent}>
          <a className={classes.support} href="/">
            ☕ Buy me a coffee
          </a>
          <a href="/">
            <GithubFill className={classes.icon} />
          </a>
        </div>
      </nav>
    </header>
  );
}
