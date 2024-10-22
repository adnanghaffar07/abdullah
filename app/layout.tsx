import type { Metadata } from "next";
import "./globals.css";

// Define the metadata for the page
export const metadata: Metadata = {
  title: "Abdullah | Lead Mobile App Developer & Automation Engineer with 8+ Years of Experience",
  description:
    "Discover Abdullah, a skilled Mobile App Developer and Automation Engineer with over 8 years of experience in delivering high-performance applications and robust automation solutions. Specializing in CI/CD integration, performance testing, and quality assurance, Abdullah is dedicated to optimizing workflows and ensuring client satisfaction. Contact for collaboration!",
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts and Local Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
