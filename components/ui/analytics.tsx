"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent, type CookieConsent } from "@/components/ui/cookie-consent";

// Google Analytics 4 is opt-in and driven entirely by environment config.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your environment to enable it — see
// .env.example. Leave it unset (as in this demo) and analytics stays off.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = (consent: CookieConsent | null) => setAllowed(Boolean(consent?.analytics));
    check(getStoredConsent());

    const handler = (e: Event) => check((e as CustomEvent<CookieConsent>).detail);
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, []);

  if (!GA_MEASUREMENT_ID || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
