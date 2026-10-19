import type { Metadata } from "next";
import { Cormorant_Garamond, Roboto, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cursiveFont = Playfair_Display({
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
});

const brandFont = Cinzel({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trisha Dental & Implant Centre | Greater Noida",
  description: "Trisha Dental & Implant Centre provides world-class root canal therapy, dental implants, crowns, cosmetic smile makeovers, and pediatric dental care in Greater Noida. Your Smile, Our Priority.",
  keywords: [
    "Dentist Greater Noida",
    "Trisha Dental",
    "Dental Implants Greater Noida",
    "Root Canal Treatment",
    "Invisalign & Braces",
    "Teeth Whitening",
    "Smile Designing",
    "Kids Dentistry"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${cursiveFont.variable} ${robotoFont.variable} ${brandFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
