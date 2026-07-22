import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/constants";
import SmoothScrollProvider from "@/components/layout/smooth-scroll-provider";
import ThemeProvider from "@/components/providers/theme-provider";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CursorGlow from "@/components/ui/cursor-glow";
import LoadingScreen from "@/components/ui/loading-screen";
import CookieConsentBanner from "@/components/ui/cookie-consent";
import Analytics from "@/components/ui/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Vettriswar Groups of Company",
    "software development company",
    "AI solutions",
    "business consulting",
    "enterprise technology",
    "Chennai IT company",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/images/vettriswar-logo.png",
        width: 745,
        height: 265,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/images/vettriswar-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/vettriswar-logo.png`,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: SITE.emails.general,
        telephone: SITE.phones[0],
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        email: SITE.emails.sales,
        telephone: SITE.phones[1],
        contactType: "sales",
      },
      {
        "@type": "ContactPoint",
        email: SITE.emails.support,
        contactType: "technical support",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: Object.values(SITE.social),
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-ink focus:font-semibold"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <LoadingScreen />
          <SmoothScrollProvider>
            <ScrollProgress />
            <CursorGlow />
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
          </SmoothScrollProvider>
          <CookieConsentBanner />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
