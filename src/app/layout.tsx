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

const siteUrl = "https://mohit-portfolio-pi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mohit Kumar Singh | Software Engineer & AI Portfolio",
    template: "%s | Mohit Kumar Singh",
  },

  description:
    "Explore Mohit Kumar Singh's portfolio featuring software engineering, backend development, artificial intelligence and projects developed alongside his Computer Science studies at KIT Karlsruhe.",

  applicationName: "Mohit Kumar Singh Portfolio",

  authors: [
    {
      name: "Mohit Kumar Singh",
    },
  ],

  creator: "Mohit Kumar Singh",
  publisher: "Mohit Kumar Singh",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Mohit Kumar Singh",
    "Software Engineer",
    "AI Engineer",
    "Computer Science",
    "KIT Karlsruhe",
    "Karlsruhe Institute of Technology",
    "Backend Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Retrieval Augmented Generation",
    "Python",
    "FastAPI",
    "Software Engineering Portfolio",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: "Mohit Kumar Singh | Software Engineering & AI",
    description:
      "Explore software engineering, backend development and artificial intelligence projects by Mohit Kumar Singh, Computer Science master's student at KIT Karlsruhe.",
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