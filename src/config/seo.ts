import type { Metadata } from "next";

const metadata: Metadata = {
  metadataBase: new URL("https://coolcontrast.vercel.app"),
  title: "Cool Contrast - Inspect and optimize the accessibility of your colors",
  description: "Inspect and optimize the accessibility of your colors",
  openGraph: {
    images: "/og-image.webp",
    url: "https://coolcontrast.vercel.app",
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
