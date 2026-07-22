"use client";

import { featuredDishes } from "@/lib/data/featured";
import { useT } from "@/lib/i18n/dict";
import DishCard from "./DishCard";
import Reveal from "./Reveal";

export default function FeaturedDishes() {
  const t = useT();
  return (
    <section id="favorites" className="paper relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-terracotta">{t.featured.eyebrow}</p>
            <h2 className="font-display mt-3 text-h2 font-semibold leading-tight text-ink">
              {t.featured.title}
            </h2>
            <p className="mt-4 text-ink/70">{t.featured.desc}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 0.08}>
              <DishCard dish={dish} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
