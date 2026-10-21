import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nagendra.dev'),
  title: 'Nagendra Yaparala — Frontend Developer & Interface Engineer',
  description:
    'Personal portfolio of Nagendra Yaparala, a frontend developer engineering thoughtful digital products with React, Next.js, and modern interface architectures at MockWin.',
  keywords: [
    'Nagendra Yaparala',
    'Yaparala Nagendra',
    'Frontend Developer',
    'Interface Engineer',
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'MockWin',
    'Portfolio',
  ],
  authors: [{ name: 'Nagendra Yaparala' }],
  creator: 'Nagendra Yaparala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nagendra.dev',
    title: 'Nagendra Yaparala — Frontend Developer & Interface Engineer',
    description:
      'Frontend developer. Interface engineer. Detail obsessive. Building thoughtful digital products with React and modern web technologies.',
    siteName: 'Nagendra Yaparala Portfolio',
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
