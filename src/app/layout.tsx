import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { dmSans } from "@/styles/fonts";
import { Navbar } from "@/components/navbar";
import metadata from "@/config/seo";

import "../styles/globals.css";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${css({
          color: "text-primary",
          bg: "bg-tertiary",
          textStyle: "body-base",
        })}`}
      >
        <Navbar />
        <main className={container()}>{children}</main>
      </body>
    </html>
  );
}
