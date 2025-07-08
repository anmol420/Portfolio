import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anmol Anand',
  description: 'Portfolio of Anmol Anand, a Backend Developer',
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
