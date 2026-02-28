import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/Navbar";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Fortuné — Frontend Developer & Web Solutions",
  description:
    "Frontend developer based in Paris specializing in responsive design and web solutions. Ready to bring your project ideas to life.",
  keywords: [
    "Daniel Fortuné",
    "Daniel Fortune",
    "Fortune Daniel",
    "Daniel F.",
    "Fortuné Daniel",
    "Freelance Developer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio Website",
    ".decode",
    "Ecole Decode",
  ],
  openGraph: {
    url: "https://fortunedaniel.com",
    title: "Daniel Fortuné — Frontend Developer & Web Solutions",
    type: "website",
    description:
      "Frontend developer based in Paris specializing in responsive design and web solutions. Ready to bring your project ideas to life.",
    siteName: "fortunedaniel.com",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Fortuné — Frontend Developer & Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/images/og-image.png",
    title: "Daniel Fortuné — Frontend Developer & Web Solutions",
    description:
      "Frontend developer based in Paris specializing in responsive design and web solutions. Ready to bring your project ideas to life.",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/images/ios-icon.png",

    other: {
      rel: "icon",
      url: "/assets/images/ios-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ebGaramond.variable} antialiased dark:bg-resumewhite bg-resumepurple scrollbar`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
