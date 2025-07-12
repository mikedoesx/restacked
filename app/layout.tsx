import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Restacked, LLC - Modern Software Solutions",
  description: "Enterprise-grade web and mobile applications built for scale",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  )
}
