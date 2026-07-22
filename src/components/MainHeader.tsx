"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { restaurant } from "@/lib/data/restaurant";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function MainHeader() {
  const { lang, toggle } = useLang();
  const t = useT();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <header className={`sticky top-0 z-[60] border-b transition-all duration-300 ${scrolled ? "border-terracotta/15 bg-cream/95 shadow-[0_18px_45px_-30px_rgba(80,45,46,.65)] backdrop-blur-xl" : "border-terracotta/10 bg-cream"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[padding] duration-300 sm:px-6 ${scrolled ? "py-2" : "py-3"}`}>
        <Link href="/" className="focus-ring flex items-center gap-3" aria-label={`${restaurant.name} — Home`}><Logo variant="mark" size={scrolled ? 42 : 48} priority /><span className="hidden sm:block"><span className="font-display block text-xl font-semibold leading-none text-wine">Baldomeros <i className="text-orange">#2</i></span><span className="mt-1 block text-[.55rem] font-bold uppercase tracking-[.2em] text-terracotta/65">Tlaquepaque · 1970</span></span></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => { const active = link.href === "/" ? pathname === "/" : link.href.includes("#") ? pathname === "/" : pathname.startsWith(link.href); return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative px-3 py-2 text-[.69rem] font-extrabold uppercase tracking-[.14em] transition-colors ${active ? "text-terracotta" : "text-ink/62 hover:text-terracotta"}`}><span>{navLabels[link.key][lang]}</span>{active && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-orange" />}</Link>; })}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"} className="hidden border-r border-ink/12 px-3 py-2 text-[.65rem] font-extrabold uppercase tracking-[.16em] text-ink/65 transition-colors hover:text-terracotta sm:block">{lang === "en" ? "ES" : "EN"}</button>
          <a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !rounded-none !px-4 !py-2.5 lg:inline-flex"><MapPin className="h-4 w-4" /> {t.header.directions}</a>
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen} className="border border-ink/16 p-2.5 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
    <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
  </>;
}
