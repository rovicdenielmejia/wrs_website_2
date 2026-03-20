import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Source_Serif_4 } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Workforce Recruitment & HR Solutions PH',
    template: '%s | WRS Philippines',
  },
  description:
    'Building Stronger Workforces. Connecting the Right People to the Right Opportunities. Professional HR & recruitment solutions for Philippine businesses.',
  keywords: [
    'recruitment Philippines',
    'HR solutions Philippines',
    'job placement agency',
    'talent acquisition',
    'workforce solutions',
  ],
  authors: [{ name: 'Workforce Recruitment & HR Solutions PH' }],
  creator: 'WRS',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://workforcerecruitmentsolutions.com',
    siteName: 'WRS Philippines',
    title: 'Workforce Recruitment & HR Solutions PH',
    description:
      'Building Stronger Workforces. Connecting the Right People to the Right Opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workforce Recruitment & HR Solutions PH',
    description:
      'Building Stronger Workforces. Connecting the Right People to the Right Opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sourceSerif.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
