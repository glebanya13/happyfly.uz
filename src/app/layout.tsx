import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Fly Travel & Logistics | Туры, Круизы, Визы и Оплата онлайн",
  description: "Круизы и путешествия из Узбекистана, приём гостей в Узбекистане, визы и трансферы. Быстрая и безопасная оплата онлайн через Uzcard, Humo, Visa, Mastercard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#1A202C] selection:bg-[#D4A045] selection:text-white">
        {children}
      </body>
    </html>
  );
}
