import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Samir Gaihre — xSamir Portfolio",
  description: "Technology enthusiast and developer building clean and creative projects.",
  metadataBase: new URL("https://xsamir.com"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Samir Gaihre — xSamir Portfolio",
    description: "Technology enthusiast and developer building clean and creative projects.",
    url: "https://xsamir.com",
    siteName: "xSamir Portfolio",
    images: [
      {
        url: "/assets/xSamirOG.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <React.Suspense fallback={<div className="h-16" />}>
              <Navbar />
            </React.Suspense>
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

