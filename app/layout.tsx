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
  title: 'Cornerstone on Arum | Only 2 Units Left (Unit 303 & 304) | Table View',
  description: 'Only 2 duplex units remaining at Cornerstone on Arum: Units 303 & 304 (2-bedroom, 2-bathroom duplex lofts measuring 77m²). All other units SOLD. No transfer duty. Contact Grant Whitburn at 072 450 3626.',
  keywords: [
    'Table View apartments for sale', 
    'Cornerstone on Arum', 
    '154 Arum Road Table View',
    'Unit 303 Cornerstone on Arum',
    'Unit 304 Cornerstone on Arum',
    'Duplex apartments Table View',
    'Luxury apartments Cape Town', 
    'New apartments Table View',
    'No transfer duty apartments Cape Town',
    'Igneous Property Development'
  ],
  authors: [{ name: 'Igneous Property Development', url: 'https://www.cornerstoneonarum.co.za' }],
  creator: 'Igneous Property Development',
  publisher: 'Igneous Property Development',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Cornerstone on Arum | Final 2 Duplex Units Available | Table View',
    description: 'Only 2 luxury duplex units left: Unit 303 & Unit 304 (2 Bed, 2 Bath, 77m²). All other units SOLD. No transfer duty. Secure your unit today.',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.cornerstoneonarum.co.za',
    siteName: 'Cornerstone on Arum',
    images: [
      {
        url: '/images/Cornerstone-on-arum-hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Cornerstone on Arum Final Available Duplex Units 303 and 304 Table View'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cornerstone on Arum | Only 2 Duplex Units Left | Table View',
    description: 'Final 2 luxury duplex units available at 154 Arum Road, Table View: Units 303 & 304 (2 Bed, 2 Bath, 77m²). All other units SOLD.',
    images: ['/images/Cornerstone-on-arum-hero-image.png'],
  },
  alternates: {
    canonical: 'https://www.cornerstoneonarum.co.za',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e293b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

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
        {/* Google Analytics 4 (GA4) */}
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}