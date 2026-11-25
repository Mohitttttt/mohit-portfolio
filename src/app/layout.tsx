import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohit Kumar Singh | Software Engineer & AI Portfolio",
    template: "%s | Mohit Kumar Singh",
  },

  description:
    "Explore the portfolio of Mohit Kumar Singh, Computer Science master's student at Karlsruhe Institute of Technology (KIT), interested in software engineering, backend development, artificial intelligence and intelligent applications.",

  applicationName: "Mohit Kumar Singh Portfolio",

  authors: [
    {
      name: "Mohit Kumar Singh",
    },
  ],

  creator: "Mohit Kumar Singh",

  keywords: [
    "Mohit Kumar Singh",
    "Software Engineer",
    "AI Engineer",
    "Computer Science",
    "Karlsruhe Institute of Technology",
    "KIT Karlsruhe",
    "Backend Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "RAG",
    "Python",
    "FastAPI",
    "Portfolio",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohit Kumar Singh | Software Engineering & AI",
    description:
      "Computer Science master's student at KIT Karlsruhe, exploring software engineering, backend systems and artificial intelligence through practical projects.",
    siteName: "Mohit Kumar Singh Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohit Kumar Singh | Software Engineering & AI",
    description:
      "Explore projects in software engineering, backend development and artificial intelligence.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0D12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
