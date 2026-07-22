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
      <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
        {/* Navegación de categorías */}
        <nav aria-label="Categorías del menú" className="lg:sticky lg:top-28 lg:self-start">
          {/* Chips horizontales en móvil */}
          <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
            {menu.map((cat) => {
              const isActive = cat.id === active;
              return (
                <li key={cat.id} className="shrink-0">
                  <button
                    onClick={() => setActive(cat.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`w-full whitespace-nowrap rounded-full px-4 py-2 text-left text-sm font-semibold transition-colors lg:rounded-lg ${
                      isActive
                        ? "bg-terracotta text-cream shadow-md"
                        : "bg-blush text-ink/70 hover:bg-terracotta/10 hover:text-terracotta"
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
            <h2 className="font-display mb-1 text-3xl font-semibold text-terracotta">
              {catLabel(activeCat)}
            </h2>
            <p className="eyebrow mb-4 text-ink/40">
              {lang === "en" ? activeCat.titleEn : activeCat.title}
            </p>
            <ul className="divide-y divide-terracotta/10">
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
