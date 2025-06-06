import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://alexmartins.dev'),
  title: 'Alex Martins - Full Stack Web Developer',
  description: 'Professional portfolio of Alex Martins, full stack web developer specialized in React, Next.js, PHP and modern technologies.',
  keywords: 'web developer, full stack, React, Next.js, PHP, JavaScript, TypeScript, Galicia, Spain',
  authors: [{ name: 'Alex Martins' }],
  creator: 'Alex Martins',
  publisher: 'Alex Martins',
  openGraph: {
    title: 'Alex Martins - Full Stack Web Developer',
    description: 'Passionate about creating amazing digital experiences',
    url: '/',
    siteName: 'Alex Martins Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Martins - Web Developer',
    description: 'Full stack web developer passionate about technology',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}