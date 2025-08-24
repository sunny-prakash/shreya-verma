import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shreya Verma - Professional Makeup Artist | Bridal & Event Makeup',
  description: 'Professional makeup artist specializing in bridal makeup, glam events, and natural beauty. Serving Mumbai & Pune with premium makeup services for your special occasions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
