import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Box, Theme } from "@radix-ui/themes";

import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import type { Metadata } from "next";
import type React from "react";
import { Source_Sans_3 } from "next/font/google";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restacked, LLC - Modern Software Solutions",
  description: "Enterprise-grade web and mobile applications built for scale",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        <Theme
          accentColor="indigo"
          grayColor="slate"
          radius="medium"
          scaling="100%"
        >
          <Box className="min-h-screen">
            <AppHeader />
            {children}
            <AppFooter />
          </Box>
        </Theme>
      </body>
    </html>
  );
}
