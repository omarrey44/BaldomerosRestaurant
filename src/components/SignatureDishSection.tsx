"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Phone } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { useT } from "@/lib/i18n/dict";
import Reveal from "./Reveal";

export default function SignatureDishSection() {
  const t = useT();
  return (
    <section id="favorites" className="background-bone relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <span className="signature-number" aria-hidden="true">01</span>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden bg-charcoal sm:aspect-[4/5]">
              <Image src="/images/menu/birria.webp" alt="Plato de birria de chivo de la casa" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover transition-transform duration-1000 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-2xl italic text-cream sm:bottom-8 sm:left-8">{t.signature.photoCaption}</p>
            </div>
            <div className="absolute -bottom-6 -right-3 bg-terracotta px-6 py-5 text-cream shadow-2xl sm:-right-8 sm:px-8"><p className="eyebrow text-cream/65">{t.signature.from}</p><p className="font-display mt-1 text-3xl font-semibold">$12.50</p></div>
          </div>
        </Reveal>
        <Reveal direction="left">
          <div className="pt-8 lg:pt-0">
            <p className="section-kicker text-terracotta">{t.signature.eyebrow}</p>
            <h2 className="editorial-heading font-display mt-6 text-[clamp(2.8rem,5.7vw,5.8rem)] font-semibold text-ink">{t.signature.title}</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/68">{t.signature.desc}</p>
            <dl className="mt-10 grid grid-cols-3 border-y border-terracotta/20 py-6">
              {t.signature.facts.map((fact, index) => <div key={fact.label} className={index ? "border-l border-terracotta/20 pl-5" : "pr-5"}><dt className="eyebrow text-ink/45">{fact.label}</dt><dd className="font-display mt-2 text-base font-semibold text-terracotta sm:text-xl">{fact.value}</dd></div>)}
            </dl>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/menu" className="btn btn-dark">{t.signature.menu} <ArrowRight className="h-4 w-4" /></Link><a href={`tel:${restaurant.phone.tel}`} className="btn border border-ink/20 text-ink hover:bg-ink hover:text-cream"><Phone className="h-4 w-4" /> {t.signature.order}</a></div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-terracotta"><Flame className="h-4 w-4" /> {t.signature.weekend}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
