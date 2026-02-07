import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Box, Theme } from "@radix-ui/themes";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";

import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Restacked | AI-Powered Software Engineering Studio",
    template: "%s | Restacked",
  },
  description:
    "Restacked helps founders, CTOs, and product teams design, build, and scale AI-powered software products with full-stack engineering, DevOps, and fractional CTO support.",
  keywords: [
    "AI development",
    "custom software development",
    "full-stack engineering",
    "DevOps consulting",
    "fractional CTO",
    "SaaS development",
    "contract analysis AI",
  ],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Restacked | AI-Powered Software Engineering Studio",
    description:
      "We build scalable web and mobile products for startups and enterprises, from strategy to launch.",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restacked | AI-Powered Software Engineering Studio",
    description:
      "Custom software, AI consulting, and cloud delivery for teams that need velocity and quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3fd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a091b" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.clausiblyUrl],
  knowsAbout: [
    "AI development",
    "custom software",
    "DevOps",
    "contract analysis",
    "SaaS engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme
            appearance="inherit"
            accentColor="purple"
            grayColor="slate"
            radius="large"
            scaling="100%"
          >
            <Box className="relative min-h-screen overflow-x-clip">
              <div
                aria-hidden
                className="pointer-events-none site-background"
              />
              <AppHeader />
              <main>{children}</main>
              <AppFooter />
            </Box>
          </Theme>
        </ThemeProvider>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
