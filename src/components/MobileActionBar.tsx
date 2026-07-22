"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, UtensilsCrossed, MapPin } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { useT } from "@/lib/i18n/dict";

export default function MobileActionBar() {
  const t = useT();
  const [hidden, setHidden] = useState(false);

  // Ocultar al llegar al footer para no tapar contenido.
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Quick actions"
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-ink/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={`tel:${restaurant.phone.tel}`}
          className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-cream transition-colors hover:bg-cream/10"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide">
            {t.mobileBar.call}
          </span>
        </a>
        <Link
          href="/menu"
          className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-cream transition-colors hover:bg-cream/10"
        >
          <UtensilsCrossed className="h-5 w-5" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide">
            {t.mobileBar.menu}
          </span>
        </Link>
        <a
          href={restaurant.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl bg-orange py-1.5 text-charcoal transition-colors hover:bg-orange-bright"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide">
            {t.mobileBar.directions}
          </span>
        </a>
      </div>
    </nav>
  );
}
