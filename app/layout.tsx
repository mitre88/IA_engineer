import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Engineer Learning Path | Your Journey to Mastering AI',
  description: 'A comprehensive, multilingual guide to becoming an AI Engineer. Learn machine learning, deep learning, NLP, computer vision, and more.',
  keywords: 'AI Engineer, Machine Learning, Deep Learning, Artificial Intelligence, Learning Path, Tutorial',
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
