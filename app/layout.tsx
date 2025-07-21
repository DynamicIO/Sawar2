import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sawar - Premium Wallpapers',
  description: 'Discover stunning wallpapers for PC and Mobile devices. Modern, animated, and fully responsive wallpaper hosting.',
  keywords: 'wallpapers, HD wallpapers, 4K wallpapers, mobile wallpapers, PC wallpapers, desktop backgrounds',
  authors: [{ name: 'Sawar Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark">
        {children}
      </body>
    </html>
  )
} 