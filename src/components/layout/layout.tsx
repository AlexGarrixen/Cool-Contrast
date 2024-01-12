import type { ReactNode } from "react";

import { container } from "@root/styled-system/patterns";

import classes from "./layout.styled";

interface LayoutProps {
  header?: ReactNode;
  aside?: ReactNode;
  content?: ReactNode;
}

export function Layout({ header, aside, content }: LayoutProps) {
  return (
    <>
      <header className={classes.header}>
        <div className={container({ maxW: "100%", mx: "0" })}>{header}</div>
      </header>
      <main className={classes.main}>
        <section className={classes.content}>{content}</section>
        <aside className={classes.aside}>{aside}</aside>
      </main>
    </>
  );
}
