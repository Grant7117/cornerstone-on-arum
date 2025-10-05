import Script from "next/script";
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cornerstone on Arum',
  description: 'Residential apartments in Table View',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Script id="cornerstone-widget-vars" strategy="beforeInteractive">
  {`
    window.CORNERSTONE_WIDGET_ORIGIN = "https://v0-intelligent-chatbot-for-property-nob127i5l.vercel.app";
    window.CORNERSTONE_WIDGET_SIDE = "left";
    window.CORNERSTONE_WIDGET_OFFSET_Y = 220;
    window.CORNERSTONE_MIN_SCROLL_TO_SHOW = 32;
    window.CORNERSTONE_WHATSAPP_HREF = "https://wa.me/27724503626";
  `}
</Script>
<Script
  id="cornerstone-widget-loader"
  src="https://v0-intelligent-chatbot-for-property-nob127i5l.vercel.app/cornerstone-embed.js"
  strategy="afterInteractive"
/>
  <script src="/cs-chat-widget.js?v=20251005200000" defer></script>
</body>
    </html>
  );
}







