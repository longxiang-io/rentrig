import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "RentRig — Rent equipment by the day",
  description:
    "Construction machinery, tools and event gear from local providers across Germany.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
