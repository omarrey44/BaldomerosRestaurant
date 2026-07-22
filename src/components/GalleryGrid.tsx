"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  gallery as allImages,
  galleryCategories,
  type GalleryImage,
} from "@/lib/data/gallery";
import { useT } from "@/lib/i18n/dict";

export default function GalleryGrid({
  images = allImages,
  showFilters = false,
}: {
  images?: GalleryImage[];
  showFilters?: boolean;
}) {
  const t = useT();
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    filter === "all" ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const move = useCallback(
    (step: number) =>
      setLightbox((i) =>
        i === null ? i : (i + step + visible.length) % visible.length
      ),
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, move]);

  return (
    <>
      {showFilters && (
        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
          {["all", ...galleryCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === cat
                  ? "bg-terracotta text-cream shadow-md"
                  : "bg-blush text-ink/70 hover:bg-terracotta/10 hover:text-terracotta"
              }`}
            >
              {cat === "all" ? t.gallery.all : t.gallery.cats[cat]}
            </button>
          ))}
        </div>
      )}

      {/* Mosaico editorial (columnas) */}
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
        {visible.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className={`group relative block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange ${
              img.span === "tall"
                ? "aspect-[3/4]"
                : img.span === "wide"
                  ? "aspect-[4/3]"
                  : "aspect-square"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {img.archive && (
              <span className="eyebrow absolute bottom-2 left-2 rounded-full bg-charcoal/70 px-2.5 py-1 text-[0.55rem] text-cream">
                {t.gallery.archive}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox accesible */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={visible[lightbox].alt}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-4 top-4 rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Imagen anterior"
              className="absolute left-3 rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:bg-orange hover:text-charcoal sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.figure
              key={visible[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[lightbox].src}
                alt={visible[lightbox].alt}
                width={1400}
                height={1050}
                className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream/80">
                {visible[lightbox].alt}
                <span className="ml-2 text-cream/40">
                  {lightbox + 1} / {visible.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Imagen siguiente"
              className="absolute right-3 rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:bg-orange hover:text-charcoal sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
