import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["600", "800"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  openGraph: {
    title: "tech.ai.studio | UGC Ads, Reels and AI Clips by Anoushey Chandio",
    description:
      "Reels, UGC-style video editing and AI-generated clips by Anoushey Chandio.",
    type: "website",
  },
  title: "tech.ai.studio | UGC Ads, Reels and AI Clips by Anoushey Chandio",
  description:
    "Reels, UGC-style video editing and AI-generated clips by Anoushey Chandio, made for Instagram and other platforms.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
