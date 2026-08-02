import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aexyl.in | AI Websites, Automation & Growth Systems",
  description: "Aexyl.in is a premium digital growth agency specializing in AI websites, automation, and modern growth systems for businesses.",
  openGraph: {
    title: "Aexyl.in | AI Websites, Automation & Growth Systems",
    description: "Aexyl.in is a premium digital growth agency specializing in AI websites, automation, and modern growth systems for businesses.",
    url: "https://aexyl.in",
    siteName: "Aexyl.in",
    images: [
      {
        url: "https://aexyl.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aexyl.in | AI Websites, Automation & Growth Systems",
    description: "Aexyl.in is a premium digital growth agency specializing in AI websites, automation, and modern growth systems for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-text-primary selection:bg-surface-secondary selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
