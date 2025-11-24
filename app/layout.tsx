import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel, Geist } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] })
const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taj Events | Premium Event Decoration in Hamilton & Kabul",
  description:
    "Creating unforgettable moments with elegant event decoration. Weddings, engagements, henna nights, and celebrations crafted with perfection. Serving Hamilton, Ontario and Kabul, Afghanistan.",
  keywords: ["event decoration", "wedding planning", "event design", "Hamilton events", "Kabul events", "Taj Events"],
  authors: [{ name: "Taj Events" }],
  creator: "Taj Events",
  publisher: "Taj Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Taj Events | Premium Event Decoration",
    description: "Creating unforgettable moments with elegant event decoration. Weddings, engagements, celebrations crafted with perfection.",
    url: "https://taj.events",
    siteName: "Taj Events",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taj Events | Premium Event Decoration",
    description: "Creating unforgettable moments with elegant event decoration.",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#631028" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-dark-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-light-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  )
}
