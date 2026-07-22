"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  // Demo WhatsApp number derived from SITE.phones[0]. Update lib/constants.ts
  // to change it — this component reads from there automatically.
  const phoneNumber = `91${SITE.phones[0].replace(/\D/g, "").slice(-10)}`;

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-glow transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
    </a>
  );
}
