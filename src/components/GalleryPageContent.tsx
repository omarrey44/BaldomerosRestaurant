"use client";

import GalleryGrid from "@/components/GalleryGrid";
import { TilePattern } from "@/components/MexicanPattern";
import { useT } from "@/lib/i18n/dict";

export default function GalleryPageContent() {
  const t = useT();
  return (
    <>
      <header className="background-wine grain relative overflow-hidden py-16 text-cream sm:py-20">
        <TilePattern color="var(--color-orange)" opacity={0.06} />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="section-kicker section-kicker-centered text-orange">{t.gallery.eyebrow}</p>
          <h1 className="editorial-heading font-display mt-5 text-h1 font-semibold">
            {t.gallery.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/75">{t.gallery.pageDesc}</p>
        </div>
      </header>

      <div className="background-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <GalleryGrid showFilters />
        </div>
      </div>
    </>
  );
}
