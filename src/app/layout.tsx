import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poster Photography — Archival Fine Art Prints',
  description: 'Museum-quality archival printing on premium stocks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
