import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alok Artistry - Handcrafted Portraits & Timeless Art",
  description: "Custom sketches made with emotion, detail, and precision. Handcrafted portraits, couple art, family sketches, and digital line art. Premium handmade art India. Starting from ₹999.",
  keywords: ["sketch artist", "custom portraits", "handmade art India", "portrait sketch", "couple art", "pencil art", "digital art", "custom artwork", "handcrafted portraits"],
  authors: [{ name: "Alok Artistry" }],
  openGraph: {
    title: "Alok Artistry - Handcrafted Portraits & Timeless Art",
    description: "Custom sketches made with emotion, detail, and precision. Handcrafted portraits created exclusively for you.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok Artistry - Handcrafted Portraits & Timeless Art",
    description: "Custom sketches made with emotion, detail, and precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

