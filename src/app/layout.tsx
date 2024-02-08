import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import '@mantine/core/styles.css';
import { Mantine } from '@/lib/mantine';
import { MenuBar } from '@/components/elements/MenuBar/MenuBar';
import { Footer } from '@/components/elements/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <Mantine>
          <MenuBar />
          {children}
          <Footer />
        </Mantine>
      </body>
    </html>
  );
}
