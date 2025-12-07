import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Rifky Saputra Maylandra",
  description: "Full-stack developer specializing in React, Next.js, Laravel, and NestJS. Creating scalable web applications with clean architecture and exceptional user experiences. Explore my portfolio of modern web development projects.",
  keywords: [
    "Rifky Saputra Maylandra",
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "Laravel developer",
    "NestJS developer",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
    "Indonesia developer",
    "web development",
    "REST API",
    "responsive design",
  ],
  authors: [{ name: "Rifky Saputra Maylandra" }],
  creator: "Rifky Saputra Maylandra",
  publisher: "Rifky Saputra Maylandra",
  metadataBase: new URL("https://github.com/RifkySM"),
  openGraph: {
    title: "Portfolio | Rifky Saputra Maylandra",
    description: "Full-stack developer specializing in React, Next.js, Laravel, and NestJS. Building modern, scalable web applications with clean architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Rifky Saputra Maylandra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Rifky Saputra Maylandra",
    description: "Full-stack developer creating scalable web applications with React, Next.js, and Laravel.",
    creator: "@rifky.saputram",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid-pattern">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
