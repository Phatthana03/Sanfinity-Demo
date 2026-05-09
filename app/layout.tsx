import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import FloatingPreview from "@/component/FloatingPreview";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ERP System",
  description: "Next.js ERP",
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
      <body className="min-h-screen bg-gray-100">

        {/* Header */}
        <Header></Header>

        {/* Content */}
        <main className="p-6">
          {children}
        </main>

        {/* Footer */}
        <Footer></Footer> 

        {/* FloatingPreview */}
        <FloatingPreview></FloatingPreview>

      </body>
    </html>
  );
}