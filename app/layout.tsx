import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

import ClientOnly from './components/ClientOnly';
import ChatLauncher from './components/ChatLauncher';

export const metadata: Metadata = {
  title: 'Cornerstone on Arum - Premium Property Development in Table View, Cape Town',
  description: 'Luxury apartments at 154 Arum Road, Table View. Advanced security, sustainable living, and premium amenities. Contact Grant: 072 450 3626',
  keywords: ['Table View apartments', 'Cornerstone on Arum', 'Property development Cape Town', 'Luxury apartments Table View', '154 Arum Road'],
  verification: {
    facebook: 'sha8fjw0dkn178anvodxwr4f90gpgy',
  },
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
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

            // GLOBAL LEAD TRACKER - Hook this to your forms/buttons
            window.trackMetaLead = function(formName) {
              if (typeof fbq === 'function') {
                fbq('track', 'Lead', { 
                  content_name: formName,
                  status: 'submitted'
                });
                console.log('Meta Lead Captured: ' + formName);
              }
            };
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} 
               src="https://www.facebook.com/tr?id=2421305398312777&ev=PageView&noscript=1" />
        </noscript>
      </head>
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