import type { Metadata, Viewport } from 'next';
import './globals.css';

import ClientOnly from './components/ClientOnly';
import ChatLauncher from './components/ChatLauncher'; // <-- your existing launcher (must be a client component)

export const metadata: Metadata = {
  title: 'Cornerstone on Arum',
  description: 'Residential apartments in Table View',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ClientOnly>
          <ChatLauncher offsetPx={200} />
        </ClientOnly>
      </body>
    </html>
  );
}
