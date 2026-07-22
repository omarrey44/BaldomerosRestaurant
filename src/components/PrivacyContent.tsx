"use client";

import { restaurant } from "@/lib/data/restaurant";
import { useLang } from "@/lib/i18n/LanguageProvider";

const copy = {
  en: {
    eyebrow: "Legal",
    title: "Privacy notice",
    p1: `At ${restaurant.name} we respect your privacy. This site is primarily informational: it shows our menu, location and contact details.`,
    h1: "Information we collect",
    p2: "We do not request personal data to browse the site. If a contact form or analytics tools are enabled in the future, only the information needed to answer your request or improve the site will be collected.",
    h2: "Contact",
    p3a: "For any questions about this notice you can reach us at ",
    p3b: " or by email at ",
    note: "This is a base version and should be reviewed by the business before final publication.",
  },
  es: {
    eyebrow: "Legal",
    title: "Aviso de privacidad",
    p1: `En ${restaurant.name} respetamos tu privacidad. Este sitio es principalmente informativo: muestra nuestro menú, ubicación y datos de contacto.`,
    h1: "Información que recopilamos",
    p2: "No solicitamos datos personales para navegar el sitio. Si en el futuro se habilita un formulario de contacto o herramientas de analítica, solo se recabará la información necesaria para responder tu solicitud o mejorar el sitio.",
    h2: "Contacto",
    p3a: "Para cualquier duda sobre este aviso puedes comunicarte al ",
    p3b: " o al correo ",
    note: "Este texto es una versión base y debe ser revisado por el negocio antes de su publicación definitiva.",
  },
};

export default function PrivacyContent() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <div className="background-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <p className="section-kicker text-terracotta">{c.eyebrow}</p>
        <h1 className="editorial-heading font-display mt-5 text-h1 font-semibold text-ink">
          {c.title}
        </h1>

        <div className="mt-8 space-y-5 text-ink/75">
          <p>{c.p1}</p>
          <h2 className="font-display pt-2 text-xl font-semibold text-ink">{c.h1}</h2>
          <p>{c.p2}</p>
          <h2 className="font-display pt-2 text-xl font-semibold text-ink">{c.h2}</h2>
          <p>
            {c.p3a}
            <a
              href={`tel:${restaurant.phone.tel}`}
              className="font-semibold text-terracotta hover:underline"
            >
              {restaurant.phone.display}
            </a>
            {c.p3b}
            <a
              href={`mailto:${restaurant.email}`}
              className="font-semibold text-terracotta hover:underline"
            >
              {restaurant.email}
            </a>
            .
          </p>
          <p className="text-sm text-ink/50">{c.note}</p>
        </div>
      </div>
    </div>
  );
}
