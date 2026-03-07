import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

import ClientOnly from './components/ClientOnly';
import ChatLauncher from './components/ChatLauncher';

export const metadata: Metadata = {
  title: 'Cornerstone on Arum - Premium Property Development in Table View, Cape Town',
  description: 'Luxury apartments at 154 Arum Road, Table View. Advanced security, sustainable living, and premium amenities. Contact Grant: 072 450 3626',
  keywords: ['Table View apartments', 'Cornerstone on Arum', 'Property development Cape Town', 'Luxury apartments Table View', '154 Arum Road'],
  openGraph: {
    title: 'Cornerstone on Arum - Premium Property Development in Table View, Cape Town',
    description: 'Luxury apartments at 154 Arum Road, Table View. Advanced security, sustainable living, and premium amenities. Contact Grant: 072 450 3626',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.cornerstoneonarum.co.za',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <ClientOnly>
          <ChatLauncher />
        </ClientOnly>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
