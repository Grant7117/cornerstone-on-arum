import type { Metadata, Viewport } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

// Load the client component only on the client, so SSR never references it.
const ChatLauncher = dynamic(() => import("./components/ChatLauncher"), { ssr: false });

export const metadata: Metadata = {
  title: "Cornerstone on Arum",
  description: "Residential apartments in Table View",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* Adjust rightPx if you want the icon nudged further */}
        <ChatLauncher offsetPx={200} rightPx={16} />
      </body>
    </html>
  );
}
