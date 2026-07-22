"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/dict";
import Reveal from "./Reveal";

export default function StorySection() {
  const t = useT();
  return (
    <section id="story" className="background-wine relative overflow-hidden border-y border-orange/10 py-20 text-cream sm:py-24 lg:py-28">
      <span className="absolute -right-10 top-0 font-display text-[15rem] italic leading-none text-cream/[0.025] sm:text-[22rem]" aria-hidden="true">70</span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <Reveal direction="right">
            <div className="max-w-xl">
              <p className="section-kicker text-orange">{t.story.eyebrow}</p>
              <h2 className="editorial-heading font-display mt-6 text-[clamp(2.65rem,4.5vw,4.65rem)] font-semibold">{t.story.title}</h2>
              <div className="mt-7 space-y-4 text-[0.98rem] leading-[1.75] text-cream/68 sm:text-base"><p>{t.story.p1}</p><p>{t.story.p2}</p></div>

              <dl className="mt-8 grid grid-cols-3 border-y border-cream/12 py-5">
                <div className="pr-3"><dt className="eyebrow text-cream/40">{t.story.specialtyLabel}</dt><dd className="font-display mt-2 text-base text-cream/90 sm:text-lg">{t.story.specialtyValue}</dd></div>
                <div className="border-l border-cream/12 px-3 sm:px-5"><dt className="eyebrow text-cream/40">{t.story.styleLabel}</dt><dd className="font-display mt-2 text-base text-cream/90 sm:text-lg">{t.story.styleValue}</dd></div>
                <div className="border-l border-cream/12 pl-3 sm:pl-5"><dt className="eyebrow text-cream/40">{t.story.homeLabel}</dt><dd className="font-display mt-2 text-base text-cream/90 sm:text-lg">{t.story.homeValue}</dd></div>
              </dl>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative pb-12 pl-4 sm:pb-14 sm:pl-10">
              <figure className="relative aspect-[5/4] overflow-hidden border border-cream/15 bg-charcoal shadow-[0_32px_80px_-35px_rgba(0,0,0,.8)]">
                <Image src="/images/history/letrero.webp" alt="Letrero histórico de Birriería Baldomeros #2" fill sizes="(max-width: 1024px) 95vw, 52vw" className="object-cover object-center sepia-[.1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/72 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 right-6 font-display text-lg italic text-cream/82 sm:bottom-7 sm:right-8 sm:text-xl">{t.story.archive}</figcaption>
              </figure>
              <div className="absolute bottom-0 left-0 min-w-40 border border-orange/35 bg-wine/95 px-6 py-5 shadow-2xl backdrop-blur-sm sm:min-w-48 sm:px-7 sm:py-6">
                <p className="eyebrow text-orange">{t.hero.sealSince}</p>
                <p className="font-display mt-1 text-5xl font-semibold leading-none sm:text-6xl">1970</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-cream/48">{t.story.styleValue}</p>
              </div>
              <span className="absolute -right-3 top-7 h-24 w-px bg-orange/45 sm:-right-5" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
