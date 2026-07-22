"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { EASE } from "@/lib/motion";
import { useT } from "@/lib/i18n/dict";
import OpenStatus from "./OpenStatus";

export default function HeroSection() {
  const reduce = useReducedMotion();
  const t = useT();
  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.11, duration: 0.75, ease: EASE } }),
  };

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-charcoal text-cream lg:min-h-[calc(100svh-108px)]">
      <Image src="/images/hero/hero-premium.png" alt="Birria de chivo estilo Jalisco servida en barro, humeante y acompañada de tortillas" fill priority sizes="100vw" className="-z-30 object-cover object-[63%_center] sm:object-[58%_center] lg:object-center" />
      <div className="hero-shade absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_65%,rgba(9,9,9,.9)_100%)]" aria-hidden="true" />

      <div className="mx-auto flex min-h-[760px] max-w-7xl items-center px-4 pb-28 pt-20 sm:px-6 lg:min-h-[calc(100svh-108px)] lg:pb-32">
        <div className="max-w-[690px]">
          <motion.div custom={0} variants={reveal} initial="hidden" animate="visible" className="mb-8 flex flex-wrap items-center gap-4">
            <p className="section-kicker text-orange">{t.hero.eyebrow}</p><OpenStatus variant="compact" className="text-cream/80" />
          </motion.div>
          <h1 className="font-display max-w-3xl text-[clamp(3.4rem,8.8vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.055em]">
            <motion.span custom={1} variants={reveal} initial="hidden" animate="visible" className="block">{t.hero.title1}</motion.span>
            <motion.span custom={2} variants={reveal} initial="hidden" animate="visible" className="mt-3 block italic text-orange">{t.hero.title2}</motion.span>
          </h1>
          <motion.p custom={3} variants={reveal} initial="hidden" animate="visible" className="mt-8 max-w-lg border-l border-orange/70 pl-5 text-base leading-relaxed text-cream/76 sm:text-lg">{t.hero.desc}</motion.p>
          <motion.div custom={4} variants={reveal} initial="hidden" animate="visible" className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/menu" className="btn btn-primary">{t.hero.ctaMenu} <ArrowRight className="h-4 w-4" /></Link>
            <a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MapPin className="h-4 w-4" /> {t.hero.ctaDirections}</a>
          </motion.div>
          <motion.a custom={5} variants={reveal} initial="hidden" animate="visible" href={`tel:${restaurant.phone.tel}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-cream/70 transition-colors hover:text-orange"><Phone className="h-4 w-4" /> {restaurant.phone.display}</motion.a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-cream/12 bg-charcoal/55 backdrop-blur-md">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cream/70 sm:grid-cols-4 sm:px-6 sm:text-xs">
          {t.hero.trust.map((item, index) => <li key={item} className={`flex items-center gap-3 py-2 ${index > 1 ? "border-t border-cream/10 sm:border-t-0" : ""}`}><span className="font-display text-lg italic text-orange">0{index + 1}</span>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
