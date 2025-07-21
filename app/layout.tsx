import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Sawar - Premium Wallpapers',
  description: 'Discover stunning wallpapers for PC and Mobile devices. Modern, animated, and fully responsive wallpaper hosting.',
  keywords: 'wallpapers, HD wallpapers, 4K wallpapers, mobile wallpapers, PC wallpapers, desktop backgrounds, futuristic backgrounds, neon wallpapers, glassmorphism, dynamic.io',
  authors: [{ name: 'Sawar Team' }],
  openGraph: {
    title: 'Sawar - Premium Wallpapers',
    description: 'Discover stunning wallpapers for PC and Mobile devices. Modern, animated, and fully responsive wallpaper hosting.',
    url: 'https://sawar.dynamicio.vercel.app/',
    siteName: 'Sawar',
    images: [
      {
        url: '/20250721_1501_Sawar Modern Logo_simple_compose_01k0q5mt1afv5spy9ybz4nw96e.png',
        width: 512,
        height: 512,
        alt: 'Sawar Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sawar - Premium Wallpapers',
    description: 'Discover stunning wallpapers for PC and Mobile devices. Modern, animated, and fully responsive wallpaper hosting.',
    images: ['/20250721_1501_Sawar Modern Logo_simple_compose_01k0q5mt1afv5spy9ybz4nw96e.png'],
    creator: '@dynamicio',
  },
  metadataBase: new URL('https://sawar.dynamicio.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/20250721_1501_Sawar Modern Logo_simple_compose_01k0q5mt1afv5spy9ybz4nw96e.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <body className="dark">
        {children}
      </body>
    </html>
  )
} 