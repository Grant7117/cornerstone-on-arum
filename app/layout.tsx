import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import ClientOnly from './components/ClientOnly';
import ChatLauncher from './components/ChatLauncher';

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
  metadataBase: new URL('https://www.cornerstoneonarum.co.za'),
  title: 'Cornerstone on Arum | Luxury Units Remaining | Available Now',
  description: 'Luxury units remaining at Cornerstone on Arum, Table View. Available now. No transfer duty. Contact Grant Whitburn at 072 450 3626.',
  keywords: [
    'Table View apartments for sale', 
    'Cornerstone on Arum', 
    'Luxury property Cape Town', 
    'New apartments Table View',
    'No transfer duty apartments'
  ],
  openGraph: {
    title: 'Cornerstone on Arum - Luxury Units Remaining',
    description: 'Luxury units available for immediate occupation. Secure your spot in Table View.',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.cornerstoneonarum.co.za',
    siteName: 'Cornerstone on Arum',
    images: [
      {
        url: '/og-image.jpg', // Ensure this file exists in your /public folder
        width: 1200,
        height: 630,
        alt: 'Cornerstone on Arum Luxury Apartments'
      }
    ],
  },
  alternates: {
    canonical: 'https://www.cornerstoneonarum.co.za',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} overflow-x-hidden`}>
      <head />
      <body className="antialiased font-sans bg-deep-obsidian text-warm-stone overflow-x-hidden w-full" suppressHydrationWarning>
        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
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
          }}
        />
        {children}
        <ClientOnly>
          <ChatLauncher />
        </ClientOnly>
        {/* Update G-ID when ready, but keeping structure intact */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}