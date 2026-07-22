"use client";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { navLinks } from "@/lib/data/navigation";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";

export default function MainFooter() {
  const { lang } = useLang(); const t = useT();
  return <footer id="site-footer" className="background-ember grain relative overflow-hidden pb-24 pt-16 text-cream md:pb-10 sm:pt-20">
    <div className="absolute -bottom-20 -right-10 opacity-[.045]" aria-hidden="true"><Logo size={390}/></div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div className="border-b border-cream/12 pb-12 sm:pb-16"><p className="section-kicker text-orange">{t.footer.style}</p><p className="font-display mt-7 max-w-5xl text-[clamp(2.7rem,6vw,6.5rem)] font-semibold leading-[.9] tracking-[-.045em]">{lang==="en"?"The pot is hot. Your table is waiting.":"La olla está caliente. La mesa está lista."}</p></div>
      <div className="grid gap-10 py-10 md:grid-cols-[1.3fr_.7fr_1fr]">
        <div><div className="flex items-center gap-4"><Logo variant="mark" size={58}/><div><p className="font-display text-xl font-semibold">Birriería Baldomeros #2</p><p className="mt-1 text-xs text-cream/45">{t.footer.blurb}</p></div></div><div className="mt-6 flex gap-3"><a href={`tel:${restaurant.phone.tel}`} className="link-editorial !text-cream"><Phone className="h-4 w-4"/>{restaurant.phone.display}</a></div></div>
        <nav aria-label={t.footer.navHeading}><p className="eyebrow mb-4 text-orange">{t.footer.navHeading}</p><ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-cream/60 md:grid-cols-1">{navLinks.map(l=><li key={l.href}><Link href={l.href} className="hover:text-orange">{navLabels[l.key][lang]}</Link></li>)}</ul></nav>
        <div><p className="eyebrow mb-4 text-orange">{t.footer.findHeading}</p><a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex justify-between gap-5 border-b border-cream/12 pb-5 text-cream/72 hover:text-orange"><span className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0"/><span>{restaurant.address.street}<br/>{restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}</span></span><ArrowUpRight className="h-4 w-4 shrink-0"/></a><p className="mt-5 text-xs leading-relaxed text-cream/42">{t.footer.hoursLine}<br/>{t.footer.closedLine}</p></div>
      </div>
      <div className="flex flex-col justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/35 sm:flex-row"><p>© 2026 {restaurant.legalName}. {t.footer.rights}</p><Link href="/privacy" className="hover:text-orange">{t.footer.privacy}</Link></div>
    </div>
  </footer>;
}
