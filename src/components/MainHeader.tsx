"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { restaurant } from "@/lib/data/restaurant";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { useT, navLabels } from "@/lib/i18n/dict";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function MainHeader() {
  const { lang } = useLang();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b bg-cream transition-shadow duration-300 ${
          scrolled
            ? "border-terracotta/15 shadow-[0_10px_30px_-20px_rgba(80,45,46,0.6)]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange"
            aria-label={`${restaurant.name} — Home`}
          >
            <Logo size={scrolled ? 46 : 54} priority className="transition-all duration-300" />
            <span className="font-display text-2xl font-semibold leading-none text-terracotta">
              Baldomeros <span className="text-orange">#2</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold uppercase tracking-wide text-ink/80 transition-colors hover:text-orange"
              >
                {navLabels[link.key][lang]}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitch />
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden !px-5 !py-2.5 lg:inline-flex"
            >
              <MapPin className="h-4 w-4" /> {t.header.directions}
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="rounded-full border border-ink/20 p-2.5 text-ink transition-colors hover:bg-ink hover:text-cream lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// Compact language switch styled for the light header.
function LangSwitch() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className="hidden rounded-full border border-ink/20 px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream sm:inline-flex"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
