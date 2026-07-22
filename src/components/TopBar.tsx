"use client";

import { Phone } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { useT } from "@/lib/i18n/dict";
import OpenStatus from "./OpenStatus";
import LanguageToggle from "./LanguageToggle";

export default function TopBar() {
  const t = useT();
  return (
    <div className="grain relative overflow-hidden bg-ink text-cream/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[0.68rem] sm:text-xs">
        <p className="eyebrow truncate text-cream/70">
          <span className="hidden sm:inline">{t.topbar.banner}</span>
          <span className="sm:hidden">{t.topbar.bannerShort}</span>
        </p>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <OpenStatus variant="compact" className="hidden text-cream/80 md:inline-flex" />
          <a
            href={`tel:${restaurant.phone.tel}`}
            className="inline-flex items-center gap-1.5 font-semibold text-cream transition-colors hover:text-orange"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{restaurant.phone.display}</span>
          </a>
          <LanguageToggle className="!px-2 !py-1" />
        </div>
      </div>
    </div>
  );
}
