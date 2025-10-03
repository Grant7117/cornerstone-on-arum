export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ChatLauncher offsetPx={200} rightPx={24} />
      </body>
    </html>
  );
}
