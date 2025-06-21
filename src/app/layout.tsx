import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

// Load the fonts
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Grow your influence with Fametonic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
