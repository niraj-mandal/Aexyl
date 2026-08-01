import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEXLY.IO | Premium Digital Growth Agency",
  description: "AEXLY.IO is a premium digital growth agency specializing in luxury, modern, and technology-driven web experiences.",
  openGraph: {
    title: "AEXLY.IO | Premium Digital Growth Agency",
    description: "AEXLY.IO is a premium digital growth agency specializing in luxury, modern, and technology-driven web experiences.",
    url: "https://aexly.io",
    siteName: "AEXLY.IO",
    images: [
      {
        url: "https://aexly.io/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEXLY.IO | Premium Digital Growth Agency",
    description: "AEXLY.IO is a premium digital growth agency specializing in luxury, modern, and technology-driven web experiences.",
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
      </body>
    </html>
  );
}
