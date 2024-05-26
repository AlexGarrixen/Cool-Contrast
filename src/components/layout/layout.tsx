import type { ReactNode } from "react";

import { container } from "@root/styled-system/patterns";

import classes from "./layout.styled";

interface LayoutProps {
  header?: ReactNode;
  content?: ReactNode;
}

export function Layout({ header, content }: LayoutProps) {
  return (
    <>
      <header className={classes.header}>
        <div className={container({ maxW: "100%", mx: "0" })}>{header}</div>
      </header>
      <main>{content}</main>
    </>
  );
}
