import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import ClientOnly from './components/ClientOnly';
import ChatLauncher from './components/ChatLauncher';
import { WhatsAppButton } from './components/whatsapp';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap' 
});

export const metadata: Metadata = {
  title: 'Cornerstone on Arum | 6 Luxury Units Remaining | Ready May 2026',
  description: 'Limited availability: 6 exclusive units back on the market at Cornerstone on Arum, Table View. Ready for occupation May 2026. No transfer duty. Contact Grant at 072 450 3626.',
  openGraph: {
    title: 'Cornerstone on Arum - 6 Units Back on the Market',
    description: 'Final 6 luxury units available for immediate occupation in May 2026.',
    type: 'website',
    url: 'https://www.cornerstoneonarum.co.za',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2421305398312777'); 
            fbq('track', 'PageView');
          `
        }} />
      </head>
      <body className="antialiased font-sans bg-deep-obsidian text-warm-stone" suppressHydrationWarning>
        {children}
        <ClientOnly>
          <ChatLauncher />
          <WhatsAppButton />
        </ClientOnly>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}