"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { EASE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT } from "@/lib/i18n/dict";

export default function ReviewsSection() {
  const t = useT();
  const { lang } = useLang();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const reduce = useReducedMotion();
  const count = reviews.length;
  const active = reviews[index];
  const text = lang === "en" ? active.text : active.textEs;
  const source = lang === "en" ? "Google review" : "Opinión de Google";

  const select = (next: number) => setState([next, next >= index ? 1 : -1]);
  const go = (step: number) => setState(([current]) => [(current + step + count) % count, step]);
  const secondary = [1, 2].map((offset) => (index + offset) % count);
  const variants = {
    enter: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? 50 : -50, y: reduce ? 0 : 8 }),
    center: { opacity: 1, x: 0, y: 0 },
    exit: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? -50 : 50, y: 0 }),
  };

  return (
    <section id="reviews" className="reviews-stage background-ember grain relative overflow-hidden py-20 text-cream sm:py-28 lg:py-36">
      <div className="reviews-word" aria-hidden="true">VOCES</div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <header className="lg:sticky lg:top-32">
            <p className="section-kicker text-orange">{t.reviews.eyebrow}</p>
            <h2 className="editorial-heading font-display mt-6 max-w-lg text-[clamp(3rem,5.6vw,5.8rem)] font-semibold">{t.reviews.title}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/62 sm:text-lg">{t.reviews.desc}</p>

            <div className="mt-10 flex items-center gap-3">
              <button onClick={() => go(-1)} aria-label={t.reviews.prev} className="review-arrow"><ChevronLeft className="h-5 w-5" /></button>
              <p className="min-w-16 text-center font-display text-xl text-cream/85"><span className="text-orange">{String(index + 1).padStart(2, "0")}</span><span className="mx-2 text-cream/20">/</span>{String(count).padStart(2, "0")}</p>
              <button onClick={() => go(1)} aria-label={t.reviews.next} className="review-arrow"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </header>

          <div aria-roledescription="carousel" aria-label={t.reviews.title}>
            <div className="relative min-h-[430px] sm:min-h-[390px]">
              <span className="absolute -left-5 -top-14 font-display text-[10rem] leading-none text-orange/12 sm:-left-10 sm:-top-20 sm:text-[15rem]" aria-hidden="true">“</span>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: EASE }}
                  drag={reduce ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => { if (info.offset.x < -80) go(1); else if (info.offset.x > 80) go(-1); }}
                  className="relative z-10 flex min-h-[390px] cursor-grab flex-col justify-between border border-cream/15 bg-cream p-7 text-ink shadow-[0_35px_90px_-35px_rgba(0,0,0,.7)] active:cursor-grabbing sm:p-10 lg:p-12"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-terracotta/15 pb-6">
                      <span className="eyebrow text-terracotta">{source}</span>
                      <Quote className="h-8 w-8 text-orange/65" aria-hidden="true" />
                    </div>
                    <blockquote className="font-display mt-8 text-pretty text-[clamp(1.65rem,3.2vw,2.75rem)] font-medium leading-[1.18] tracking-[-0.025em] text-ink/90">“{text}”</blockquote>
                  </div>
                  <figcaption className="mt-10 flex items-end justify-between gap-4">
                    <div><span className="block h-px w-10 bg-terracotta/50" /><p className="mt-3 font-bold text-ink">{active.name}</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink/45">{source}</p></div>
                    <span className="font-display text-5xl italic text-terracotta/15">{String(index + 1).padStart(2, "0")}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {secondary.map((reviewIndex) => {
                const review = reviews[reviewIndex];
                const reviewText = lang === "en" ? review.text : review.textEs;
                return (
                  <button key={review.name} onClick={() => select(reviewIndex)} className="group border border-cream/12 bg-cream/[0.045] p-5 text-left transition-all duration-300 hover:border-orange/45 hover:bg-cream/[0.075] sm:p-6">
                    <span className="flex items-center justify-between"><span className="text-sm font-bold text-cream/85">{review.name}</span><ArrowUpRight className="h-4 w-4 text-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                    <span className="mt-3 line-clamp-2 block text-sm leading-relaxed text-cream/48">“{reviewText}”</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex gap-2" role="tablist" aria-label={t.reviews.title}>
              {reviews.map((review, i) => <button key={review.name} onClick={() => select(i)} aria-label={`${t.reviews.title} ${i + 1}`} aria-selected={i === index} role="tab" className={`h-1 transition-all duration-300 ${i === index ? "w-12 bg-orange" : "w-6 bg-cream/20 hover:bg-cream/40"}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
