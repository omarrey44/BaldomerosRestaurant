"use client";

import { Mail, Send } from "lucide-react";
import { restaurant } from "@/lib/data/restaurant";
import { useLang } from "@/lib/i18n/LanguageProvider";
import Reveal from "./Reveal";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Let’s talk birria.",
    intro: "Questions about the menu, large orders or your next visit? Leave us the details and we’ll get back to you.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
    privacy: "By sending, you agree that we may use your information only to respond to your request.",
    direct: "Or write directly",
  },
  es: {
    eyebrow: "Contacto",
    title: "Hablemos de birria.",
    intro: "¿Dudas sobre el menú, pedidos grandes o tu próxima visita? Cuéntanos los detalles y nos comunicaremos contigo.",
    name: "Nombre",
    phone: "Teléfono",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
    privacy: "Al enviar, aceptas que usemos tus datos únicamente para responder a tu solicitud.",
    direct: "O escríbenos directamente",
  },
};

export default function ContactPageContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <section className="background-wine relative min-h-[calc(100svh-108px)] overflow-hidden py-20 text-cream sm:py-28 lg:py-32">
      <span className="absolute -right-10 -top-24 font-display text-[24rem] leading-none text-cream/[.025]" aria-hidden="true">@</span>
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal direction="right">
          <div className="max-w-lg lg:sticky lg:top-32">
            <p className="section-kicker text-orange">{c.eyebrow}</p>
            <h1 className="editorial-heading font-display mt-7 text-[clamp(3.4rem,6.5vw,6.8rem)] font-semibold">{c.title}</h1>
            <p className="mt-7 text-lg leading-relaxed text-cream/62">{c.intro}</p>
            <div className="mt-10 border-t border-cream/12 pt-6">
              <p className="eyebrow text-cream/35">{c.direct}</p>
              <a href={`mailto:${restaurant.email}`} className="link-editorial mt-4 !text-orange"><Mail className="h-4 w-4" />{restaurant.email}</a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <form action={`mailto:${restaurant.email}`} method="post" encType="text/plain" className="grid gap-x-5 gap-y-7 border border-cream/15 bg-charcoal/20 p-6 shadow-[0_35px_90px_-45px_rgba(0,0,0,.75)] backdrop-blur-sm sm:grid-cols-2 sm:p-10 lg:p-12">
            <label className="contact-field"><span>{c.name}</span><input name="name" type="text" autoComplete="name" required /></label>
            <label className="contact-field"><span>{c.phone}</span><input name="phone" type="tel" autoComplete="tel" /></label>
            <label className="contact-field"><span>{c.email}</span><input name="email" type="email" autoComplete="email" required /></label>
            <label className="contact-field"><span>{c.subject}</span><input name="subject" type="text" required /></label>
            <label className="contact-field sm:col-span-2"><span>{c.message}</span><textarea name="message" rows={7} required /></label>
            <div className="flex flex-col items-start justify-between gap-5 border-t border-cream/10 pt-6 sm:col-span-2 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs leading-relaxed text-cream/38">{c.privacy}</p>
              <button type="submit" className="btn btn-primary shrink-0"><Send className="h-4 w-4" />{c.send}</button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
