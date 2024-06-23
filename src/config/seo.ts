import type { Metadata } from "next";

const metadata: Metadata = {
  metadataBase: new URL("https://coolcontrast.vercel.app"),
  title: "Cool Contrast - Optimize the accessibility of your colors",
  authors: [{ name: "Alex Garrixen", url: "https://alextexis.vercel.app" }],
  robots: {
    index: true,
    follow: true,
  },
  description: "Check color pairings for contrast, ensuring alignment with WCAG guidelines",
  openGraph: {
    images: "/seo-og-image.webp",
    url: "https://coolcontrast.vercel.app",
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  twitter: {
    creator: "@AlexGarrixen",
    card: "summary_large_image",
  },
  appleWebApp: {
    title: "Cool Contrast",
  },
};

export default metadata;
