import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Fortuné",
  description:
    "Freelance Developer | I'm always ready to work on exciting projects. Tell me about yours and let's work together !",
  keywords: [
    "Daniel Fortuné",
    "Freelance Developer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Projects",
    "Skills",
    "Contact",
  ],
  openGraph: {
    title: "Daniel Fortuné - Freelance Developer",
    description:
      "I'm always ready to work on exciting projects. Tell me about yours and let's work together !",
    siteName: "fortunedaniel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Fortuné - Freelance Developer",
    description:
      "I'm always ready to work on exciting projects. Tell me about yours and let's work together !",
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
        <Analytics />
      </body>
    </html>
  );
}
