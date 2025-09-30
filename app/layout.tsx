import type { Metadata } from "next";
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
  title: "Monday Coffee Co - Bold, Ethical, Unpretentious Coffee | Chicago",
  description: "Bold, ethically sourced single-origin coffee roasted in Michigan, brewed fresh in Chicago. Founded by Amanda Harth & Felton Kizer. Visit us at 3243 W 16th St.",
  keywords: "monday coffee, coffee chicago, ethically sourced coffee, single origin coffee, small batch coffee, networking coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
