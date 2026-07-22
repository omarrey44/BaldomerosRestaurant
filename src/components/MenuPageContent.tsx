"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import MenuFull from "@/components/MenuFull";
import { TalaveraPattern } from "@/components/MexicanPattern";
import { restaurant } from "@/lib/data/restaurant";
import { useT } from "@/lib/i18n/dict";

export default function MenuPageContent() {
  const t = useT();
  return (
    <>
      <header className="background-ember grain relative overflow-hidden py-16 text-cream sm:py-20">
        <TalaveraPattern color="var(--color-orange)" opacity={0.06} />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="section-kicker section-kicker-centered text-orange">{t.menu.pageEyebrow}</p>
          <h1 className="editorial-heading font-display mt-5 text-h1 font-semibold">
            {t.menu.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">{t.menu.note}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`tel:${restaurant.phone.tel}`} className="btn btn-primary">
              <Phone className="h-4 w-4" /> {t.menu.callToOrder}
            </a>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <MapPin className="h-4 w-4" /> {t.menu.directions}
            </a>
          </div>
        </div>
      </header>

      <div className="background-ivory py-16 sm:py-20">
        <MenuFull />

        <div className="mx-auto mt-16 max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-ink/60">{t.menu.craving}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/visit" className="btn btn-dark">
              <MapPin className="h-4 w-4" /> {t.menu.visitUs}
            </Link>
            <a href={`tel:${restaurant.phone.tel}`} className="btn btn-primary">
              <Phone className="h-4 w-4" /> {restaurant.phone.display}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
