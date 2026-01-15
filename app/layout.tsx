import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iron Works Gym | The Gym That's Not A Health Club",
  description:
    "Since 1974, Iron Works Gym has served Bellevue with hardcore training, world-class coaching, and a true gym experience. Visit us at 12708 Northup Way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GymAndFitnessCenter",
    "name": "Iron Works Gym",
    "description": "The Gym That's Not A Health Club. Since 1974, Iron Works Gym has served Bellevue with hardcore training, world-class coaching, and a true gym experience.",
    "image": "https://www.ironworksgym.com/images/ironworksLogo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12708 Northup Way",
      "addressLocality": "Bellevue",
      "addressRegion": "WA",
      "postalCode": "98005",
      "addressCountry": "US"
    },
    "telephone": "+1-425-883-6006",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "url": "https://www.ironworksgym.com"
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
      >
        <a
          href="#main-content"
          className="absolute -top-96 left-4 z-[60] px-6 py-3 bg-yellow-500 text-zinc-950 font-semibold rounded-lg shadow-lg transition-all focus:top-4"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
