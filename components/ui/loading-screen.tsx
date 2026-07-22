"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "vettriswar-loaded";

export default function LoadingScreen() {
  // Default to true so the screen is present for the very first paint
  // (prevents a flash of the site before we know whether to show it).
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const alreadyLoaded =
      typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";

    if (alreadyLoaded) {
      setVisible(false);
      return;
    }

    setReady(true);

    const finish = () => {
      sessionStorage.setItem(SESSION_KEY, "1");
      // small buffer so the bar visibly completes before fading out
      setTimeout(() => setVisible(false), 400);
    };

    if (document.readyState === "complete") {
      const t = setTimeout(finish, 900);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", finish);
    // Safety net: never block the site for more than ~4s
    const fallback = setTimeout(finish, 4000);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/vettriswar-logo.png"
              alt="Vettriswar Groups of Company"
              width={220}
              height={78}
              priority
              className="h-12 w-auto object-contain sm:h-16"
            />
          </motion.div>

          <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-paper/10 sm:w-56">
            <motion.div
              className="h-full w-full bg-gold-gradient"
              initial={{ x: "-100%" }}
              animate={ready ? { x: "0%" } : { x: "-100%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
