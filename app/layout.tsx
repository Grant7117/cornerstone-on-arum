// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cornerstoneonarum.co.za"),
  title: {
    default: "Cornerstone on Arum",
    template: "%s | Cornerstone on Arum",
  },
  description:
    "Modern apartments at Cornerstone on Arum. View floor plans, features, finance options, and enquire now.",
  openGraph: {
    title: "Cornerstone on Arum",
    description:
      "Modern apartments at Cornerstone on Arum. View floor plans, features, finance options, and enquire now.",
    url: "/",
    siteName: "Cornerstone on Arum",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
