import { button } from "@root/styled-system/recipes";

import { GithubFill, Coffee, Brand } from "@/components/icons";

import classes from "./navbar.styled";

export function Navbar() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Brand className={`${classes.icon} ${classes.logoIcon}`} />
          Cool Contrast
        </div>
        <div className={classes.rightContent}>
          <a
            aria-label="buy me a coffee"
            className={button({ variant: "solid-white" })}
            href="https://www.buymeacoffee.com/alexgarrixen"
            rel="noopener"
            target="_blank"
          >
            <Coffee className={`${classes.leftIcon} ${classes.icon}`} />
            <span className={classes.btnLabel}>Buy me a coffee</span>
          </a>
          <a
            aria-label="star on github"
            className={button({ variant: "solid-white" })}
            href="https://github.com/AlexGarrixen/Cool-Contrast"
            rel="noopener"
            target="_blank"
          >
            <GithubFill className={classes.icon} />
          </a>
        </div>
      </nav>
    </header>
  );
}
