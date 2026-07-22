"use client";

import { useState } from "react";
import { menu } from "@/lib/data/menu";
import { useLang } from "@/lib/i18n/LanguageProvider";
import MenuItemRow from "./MenuItemRow";

export default function MenuFull() {
  const { lang } = useLang();
  const [active, setActive] = useState(menu[0].id);
  const activeCat = menu.find((c) => c.id === active) ?? menu[0];
  const catLabel = (c: (typeof menu)[number]) =>
    lang === "en" ? c.title : c.titleEn;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Navegación de categorías */}
        <nav aria-label="Categorías del menú" className="lg:sticky lg:top-28 lg:self-start">
          {/* Chips horizontales en móvil */}
          <p className="eyebrow mb-4 hidden text-ink/35 lg:block">{lang === "en" ? "Categories" : "Categorías"}</p>
          <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-terracotta/15 lg:px-0">
            {menu.map((cat) => {
              const isActive = cat.id === active;
              return (
                <li key={cat.id} className="shrink-0">
                  <button
                    onClick={() => setActive(cat.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`w-full whitespace-nowrap border px-4 py-2.5 text-left text-sm font-semibold transition-colors lg:border-x-0 lg:border-t-0 lg:border-b-terracotta/15 lg:px-1 lg:py-4 ${
                      isActive
                        ? "border-terracotta bg-terracotta text-cream lg:bg-transparent lg:text-terracotta"
                        : "border-terracotta/15 bg-cream text-ink/60 hover:text-terracotta lg:bg-transparent"
                    }`}
                  >
                    {catLabel(cat)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Platillos de la categoría activa */}
        <div>
          <div key={activeCat.id} className="animate-[fadeIn_0.4s_ease]">
            <h2 className="editorial-heading font-display mb-2 text-4xl font-semibold text-terracotta sm:text-5xl">
              {catLabel(activeCat)}
            </h2>
            <p className="eyebrow mb-4 text-ink/40">
              {lang === "en" ? activeCat.titleEn : activeCat.title}
            </p>
            <ul className="mt-8 border-t border-terracotta/20">
              {activeCat.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
