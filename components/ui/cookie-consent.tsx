"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "vettri-cookie-consent";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function getStoredConsent(): CookieConsent | null {
  return readConsent();
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);
  }, []);

  const save = (consent: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    // Let the rest of the app (e.g. analytics loader) react immediately.
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () => save({ necessary: true, analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-ink-soft/95 p-6 shadow-gold backdrop-blur-xl sm:inset-x-6 sm:bottom-6"
        >
          <div className="flex items-start gap-4">
            <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
            <div className="flex-1">
              <h2 className="font-display text-sm uppercase tracking-widest text-paper">
                Cookie Preferences
              </h2>
              <p className="mt-2 text-sm text-paper-muted">
                We use cookies to run this site and, with your permission, to understand
                traffic and improve your experience. You can change your choice anytime.
              </p>

              {showPreferences && (
                <div className="mt-4 space-y-3 rounded-xl border border-paper/10 bg-paper/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-paper">Necessary</span>
                    <span className="text-xs uppercase tracking-widest text-paper-muted">
                      Always on
                    </span>
                  </div>
                  <label className="flex items-center justify-between gap-4">
                    <span className="text-sm text-paper">Analytics</span>
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="h-4 w-4 accent-gold"
                    />
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    <span className="text-sm text-paper">Marketing</span>
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="h-4 w-4 accent-gold"
                    />
                  </label>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <button onClick={acceptAll} className="btn-gold px-6 py-2.5 text-xs">
                  Accept All
                </button>
                <button onClick={rejectAll} className="btn-outline px-6 py-2.5 text-xs">
                  Reject All
                </button>
                <button
                  onClick={() =>
                    showPreferences ? savePreferences() : setShowPreferences(true)
                  }
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-paper-muted underline-offset-4 hover:text-gold hover:underline"
                >
                  {showPreferences ? "Save Preferences" : "Preferences"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
