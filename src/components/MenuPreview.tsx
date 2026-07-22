"use client";

import Link from "next/link";
import { UtensilsCrossed, Phone, MapPin } from "lucide-react";
import { menu } from "@/lib/data/menu";
import { restaurant } from "@/lib/data/restaurant";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/dict";
import MenuItemRow from "./MenuItemRow";
import Reveal from "./Reveal";

export default function MenuPreview() {
  const { lang } = useLang();
  const t = useT();
  // Preview: first two categories (Specialties + Tacos & Burritos).
  const preview = menu.slice(0, 2);

  return (
    <section id="menu" className="background-ivory relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="section-kicker section-kicker-centered text-terracotta">{t.menu.eyebrow}</p>
            <h2 className="editorial-heading font-display mt-5 text-h2 font-semibold text-ink">
              {t.menu.title}
            </h2>
            <p className="mt-4 text-ink/70">{t.menu.note}</p>
          </div>
        </Reveal>

        <div className="grid gap-x-16 gap-y-10 border-y border-terracotta/15 py-9 md:grid-cols-2">
          {preview.map((cat) => (
            <Reveal key={cat.id}>
              <div>
                <h3 className="font-display mb-3 flex items-center gap-3 text-3xl font-semibold text-terracotta">
                  {lang === "en" ? cat.title : cat.titleEn}
                  <span className="h-px flex-1 bg-terracotta/30" />
                </h3>
                <ul className="divide-y divide-terracotta/10">
                  {cat.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <Link href="/menu" className="btn btn-dark">
            <UtensilsCrossed className="h-4 w-4" /> {t.menu.viewFull}
          </Link>
          <a href={`tel:${restaurant.phone.tel}`} className="btn btn-primary">
            <Phone className="h-4 w-4" /> {t.menu.callToOrder}
          </a>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <MapPin className="h-4 w-4" /> {t.menu.directions}
          </a>
        </div>
      </div>
    </section>
  );
}
