"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "@/lib/data/gallery";
import { useT } from "@/lib/i18n/dict";
import GalleryGrid from "./GalleryGrid";
import Reveal from "./Reveal";

export default function GalleryPreview() {
  const t = useT();
  const subset = gallery.filter((g) => !g.archive).slice(0, 9);

  return (
    <section id="gallery" className="background-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker text-terracotta">{t.gallery.eyebrow}</p>
              <h2 className="editorial-heading font-display mt-5 text-h2 font-semibold text-ink">
                {t.gallery.title}
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-terracotta transition-colors hover:text-orange"
            >
              {t.gallery.viewFull}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <GalleryGrid images={subset} />
      </div>
    </section>
  );
}
