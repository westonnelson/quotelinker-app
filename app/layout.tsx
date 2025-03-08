import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToHash from "@/components/scroll-to-hash"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "QuoteLinker - Compare Insurance Quotes from Top Local Agents",
  description: "Get auto, home, life, and health insurance quotes from trusted local agents. Exclusive leads. No spam.",
  openGraph: {
    title: "QuoteLinker - Compare Insurance Quotes from Top Local Agents",
    description:
      "Get auto, home, life, and health insurance quotes from trusted local agents. Exclusive leads. No spam.",
    url: "https://quotelinker.vercel.app",
    siteName: "QuoteLinker",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "QuoteLinker - Insurance Lead Generation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ScrollToHash />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'