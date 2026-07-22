"use client";

import { Quote } from "lucide-react";
import type { Review } from "@/lib/data/reviews";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function ReviewCard({ review }: { review: Review }) {
  const { lang } = useLang();
  const text = lang === "en" ? review.text : review.textEs;
  const source = lang === "en" ? "Google review" : "Opinión de Google";

  return (
    <figure className="relative flex h-full flex-col rounded-2xl rounded-tr-[2.5rem] border border-terracotta/25 bg-cream p-7 shadow-xl sm:p-9">
      <Quote className="h-9 w-9 text-orange/80" aria-hidden="true" />
      <blockquote className="font-display mt-4 flex-1 text-pretty text-lg leading-relaxed text-ink/85 sm:text-xl">
        {text}
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between border-t border-terracotta/15 pt-4">
        <span className="font-semibold text-ink">{review.name}</span>
        <span className="eyebrow rounded-full bg-blush px-3 py-1 text-[0.6rem] text-terracotta">
          {source}
        </span>
      </figcaption>
    </figure>
  );
}
