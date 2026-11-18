"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("#contact, #enquiry");
    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => setAtContact(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.02 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={atContact || undefined}
      inert={atContact}
      className={`fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        atContact
          ? "pointer-events-none translate-y-3 opacity-0"
          : "opacity-100"
      }`}
    >
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VIJETA Batteries on WhatsApp"
        title="WhatsApp us"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-[0_14px_34px_-14px_rgba(22,56,198,0.9)] transition-all hover:-translate-y-0.5 hover:bg-royal-deep"
      >
        <WhatsAppIcon className="h-[20px] w-[20px]" />
      </a>
    </div>
  );
}
