import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Pragati Singh — Software Engineer & Full Stack Developer',
  description:
    'Pragati Singh — Final-year B.Tech CSE student, Software Engineer, and Problem Solver. 450+ DSA problems solved on LeetCode.',
  keywords: [
    'Pragati Singh',
    'Software Engineer',
    'Full Stack Developer',
    'Computer Science',
    'Next.js',
    'React',
    'Portfolio',
    'LeetCode',
  ],
  authors: [{ name: 'Pragati Singh' }],
  openGraph: {
    title: 'Pragati Singh — Software Engineer & Full Stack Developer',
    description:
      'Final-year B.Tech CSE student seeking software engineering opportunities. 450+ DSA problems solved on LeetCode.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background text-foreground selection:bg-blue-100 selection:text-blue-900 scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
