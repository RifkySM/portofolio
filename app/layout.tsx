import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Full-Stack Developer",
  description: "Full-stack developer specializing in React & Laravel. Creating scalable applications with clean architecture.",
  keywords: ["developer", "react", "laravel", "full-stack", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full-Stack Developer",
    description: "Full-stack developer specializing in React & Laravel.",
    type: "website",
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
      </body>
    </html>
  );
}
