import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alejandro Martins - Web Developer Full Stack',
  description: 'Portfólio profissional de Alejandro Martins, desenvolvedor web full stack especializado em React, Next.js, PHP e tecnologias modernas.',
  keywords: 'desenvolvedor web, full stack, React, Next.js, PHP, JavaScript, TypeScript, Galicia, España',
  authors: [{ name: 'Alejandro Martins' }],
  creator: 'Alejandro Martins',
  publisher: 'Alejandro Martins',
  openGraph: {
    title: 'Alejandro Martins - Web Developer Full Stack',
    description: 'Apaixonado por criar experiências digitais incríveis',
    url: 'https://alejandromartins.dev',
    siteName: 'Alejandro Martins Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Martins - Web Developer',
    description: 'Desenvolvedor web full stack apaixonado por tecnologia',
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
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}