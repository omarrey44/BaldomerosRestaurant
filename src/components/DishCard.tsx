"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedDish } from "@/lib/data/featured";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/dict";

export default function DishCard({
  dish,
  index,
}: {
  dish: FeaturedDish;
  index: number;
}) {
  const { lang } = useLang();
  const t = useT();
  const description = lang === "en" ? dish.description : dish.descriptionEs;
  const tag = lang === "en" ? dish.tag : dish.tagEs ?? dish.tag;

  return (
    <Link
      href="/menu"
      className="group relative flex flex-col overflow-hidden border border-terracotta/20 bg-cream shadow-[0_18px_40px_-28px_rgba(80,45,46,0.7)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(168,67,50,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="font-display absolute left-3 top-2 text-5xl font-bold text-cream/80 mix-blend-overlay">
          {String(index + 1).padStart(2, "0")}
        </span>

        {tag && (
          <span className="eyebrow absolute right-3 top-3 rounded-full bg-orange px-3 py-1 text-[0.6rem] text-charcoal shadow-md">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink">
            {dish.name}
          </h3>
          <span className="shrink-0 font-display text-lg font-bold text-terracotta">
            {dish.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-terracotta transition-colors group-hover:text-orange">
          {t.dishCard.viewInMenu}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
