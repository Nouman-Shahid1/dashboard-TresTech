"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import { DocumentProvider } from "./contexts/DocumentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard - Tres Tech Global | Professional Career Services</title>
        <meta name="description" content="Access your professional dashboard at Tres Tech Global. Manage documents, track progress, schedule interviews, and advance your career with our comprehensive services." />
        <meta name="keywords" content="career services, professional development, resume optimization, interview preparation, job market, career dashboard" />
        <meta name="author" content="Tres Tech Global" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dashboard - Tres Tech Global | Professional Career Services" />
        <meta property="og:description" content="Access your professional dashboard at Tres Tech Global. Manage documents, track progress, and advance your career." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tres Tech Global" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dashboard - Tres Tech Global" />
        <meta name="twitter:description" content="Professional career services dashboard for managing your career advancement." />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f0a709" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-thin`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <DocumentProvider>
            {children}
          </DocumentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
