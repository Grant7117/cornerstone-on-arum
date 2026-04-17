import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
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
  title: 'Cornerstone on Arum - Premium Property Development',
  description: 'Luxury apartments at 154 Arum Road, Table View. Advanced security and sustainable living.',
  keywords: ['Table View apartments', 'Cornerstone on Arum', 'Property development Cape Town'],
  openGraph: {
    title: 'Cornerstone on Arum - Premium Property Development',
    description: 'Luxury apartments at 154 Arum Road, Table View.',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.cornerstoneonarum.co.za',
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
        </ClientOnly>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}