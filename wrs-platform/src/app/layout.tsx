import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Source_Serif_4 } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://workforcerecruitmentsolutions.com'),
  title: {
    default: 'Workforce Recruitment & HR Solutions PH | Strategic Hiring & Practical HR Support',
    template: '%s | WRS Philippines',
  },
  description:
    'We help SMEs and scaling companies hire smarter, structure HR processes, and build stable, high-performing teams.',
  keywords: [
    'workforce recruitment Philippines',
    'HR support SME',
    'talent acquisition',
    'recruitment partner',
    'workforce planning',
    'HR consulting',
    'hiring solutions',
  ],
  authors: [{ name: 'Workforce Recruitment & HR Solutions PH' }],
  creator: 'Workforce Recruitment & HR Solutions PH',
  publisher: 'Workforce Recruitment & HR Solutions PH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Workforce Recruitment & HR Solutions PH',
    title: 'Workforce Recruitment & HR Solutions PH | Strategic Hiring & Practical HR Support',
    description:
      'We help SMEs and scaling companies hire smarter, structure HR processes, and build stable, high-performing teams.',
    images: [
      {
        url: '/Assets/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Workforce Recruitment & HR Solutions PH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workforce Recruitment & HR Solutions PH',
    description: 'Building Stronger Workforces. Connecting the Right People to the Right Opportunities.',
    images: ['/Assets/og-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Assets/WRS@1000x.png',
    apple: '/Assets/WRS@1000x.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${sourceSerif.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
