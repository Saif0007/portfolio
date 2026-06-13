import type { Metadata } from 'next'
import { Syne, Manrope, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-syne' })
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Saif Ur Rehman',
  description: 'Full Stack AI Engineer — building intelligent production systems',
  generator: 'Saif',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`} style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
