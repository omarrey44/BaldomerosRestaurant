"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "@/lib/data/gallery";
import { useT } from "@/lib/i18n/dict";
import Reveal from "./Reveal";

export default function GalleryPreview() {
  const t = useT(); const images = gallery.filter((g) => !g.archive).slice(0, 3);
  return <section id="gallery" className="background-ivory py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Reveal><div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="section-kicker text-terracotta">{t.gallery.eyebrow}</p><h2 className="editorial-heading font-display mt-5 max-w-2xl text-h2 font-semibold text-ink">{t.gallery.title}</h2></div><Link href="/gallery" className="link-editorial">{t.gallery.viewFull}<ArrowUpRight className="h-4 w-4"/></Link></div></Reveal>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
        {images.map((img,i)=><Reveal key={img.src} className={i===0?"sm:col-span-2 lg:col-span-7 lg:row-span-2":i<3?"lg:col-span-5":"lg:col-span-5"}><Link href="/gallery" className={`group relative block overflow-hidden bg-charcoal ${i===0?"aspect-[5/4] lg:h-full":"aspect-[16/9]"}`}><Image src={img.src} alt={img.alt} fill sizes={i===0?"(max-width:1024px) 100vw,58vw":"(max-width:1024px) 50vw,40vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"/><div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent"/><span className="absolute bottom-4 left-5 text-[.62rem] font-bold uppercase tracking-[.18em] text-cream/75">0{i+1} · {img.category}</span></Link></Reveal>)}
      </div>
    </div>
  </section>;
}
