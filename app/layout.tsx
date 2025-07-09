import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anmol Anand',
  description: 'Portfolio of Anmol Anand, a Backend Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
    other: {
      rel: 'icon',
      url: '/favicon-16x16.png',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
