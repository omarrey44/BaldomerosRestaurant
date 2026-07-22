import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import MobileActionBar from "@/components/MobileActionBar";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { restaurantJsonLd, SITE_URL } from "@/lib/jsonld";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Birriería Baldomeros #2 | Jalisco-Style Birria in Los Angeles",
    template: "%s | Birriería Baldomeros #2",
  },
  description:
    "Enjoy authentic goat birria, menudo and Mexican specialties, Tlaquepaque style, at Birriería Baldomeros #2 in Los Angeles.",
  keywords: [
    "birria",
    "birria de chivo",
    "menudo",
    "birria estilo Jalisco",
    "comida mexicana Los Angeles",
    "Tlaquepaque",
    "tacos",
    "quesabirria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_MX",
    url: SITE_URL,
    siteName: "Birriería Baldomeros #2",
    title: "Birriería Baldomeros #2 | Jalisco-Style Birria in Los Angeles",
    description:
      "Authentic goat birria, menudo and Mexican specialties, Tlaquepaque style, in Los Angeles.",
    images: [
      {
        url: "/images/hero/birria-hero.webp",
        width: 1200,
        height: 1500,
        alt: "Birria de chivo estilo Jalisco en Birriería Baldomeros #2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birriería Baldomeros #2",
    description: "Authentic Tlaquepaque-style goat birria in Los Angeles.",
    images: ["/images/hero/birria-hero.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()),
          }}
        />
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-orange focus:px-5 focus:py-2.5 focus:font-bold focus:text-ink focus:shadow-lg"
          >
            Skip to content
          </a>
          <TopBar />
          <MainHeader />
          <main id="main">{children}</main>
          <MainFooter />
          <MobileActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
