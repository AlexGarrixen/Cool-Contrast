import { css } from "@root/styled-system/css";

// import { dmSans } from "@/styles/fonts";
import { Layout } from "@/components/layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { DialogMoreDetails } from "@/components/dialog-more-details";
import metadata from "@/config/seo";
import { font } from "@/lib/local-font";

import "../styles/globals.css";

const IS_PROD = process.env.NODE_ENV === "production";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${css({
          color: "text-primary",
          bg: "bg-secondary",
          textStyle: "body-base",
        })}`}
      >
        <Layout
          content={
            <>
              {children}
              <Footer />
            </>
          }
          header={<Navbar />}
        />
        <DialogMoreDetails />
        {IS_PROD ? <GoogleAnalytics /> : null}
      </body>
    </html>
  );
}
