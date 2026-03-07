import type { Metadata, Viewport } from "next";
import "./globals.css";
import ChatLauncher from "./components/ChatLauncher";

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
        <ChatLauncher offsetPx={200} rightPx={16} />
      </body>
    </html>
  );
}
