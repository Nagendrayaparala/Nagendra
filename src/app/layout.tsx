import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nagendra.dev'),
  title: 'Yaparala Nagendra — Frontend Developer',
  description: 'Frontend developer dedicated to crafting thoughtful user interfaces, reliable component architectures, and fluid web experiences.',
  keywords: ['Yaparala Nagendra', 'Frontend Developer', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Yaparala Nagendra' }],
  creator: 'Yaparala Nagendra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nagendra.dev',
    title: 'Yaparala Nagendra — Frontend Developer',
    description: 'I build digital experiences that feel effortless.',
    siteName: 'Nagendra Portfolio',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.filename && (e.filename.startsWith('chrome-extension://') || e.filename.startsWith('moz-extension://'))) {
                    e.stopImmediatePropagation();
                  }
                }, true);
              }
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-bg text-ink font-sans antialiased selection:bg-accent/20 selection:text-ink relative overflow-x-hidden min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
