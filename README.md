# Birriería Baldomeros #2 — Sitio web

Rediseño premium ("Fuego de Jalisco") construido con **Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

## Cómo actualizar el contenido (sin tocar componentes)

Todo el contenido editable vive en `src/lib/data/`:

| Qué | Archivo |
| --- | --- |
| Nombre, dirección, teléfono, **horarios**, redes, mapa, año | `src/lib/data/restaurant.ts` |
| **Menú y precios** (categorías + platillos) | `src/lib/data/menu.ts` |
| Platillos destacados de la portada | `src/lib/data/featured.ts` |
| **Opiniones** de clientes | `src/lib/data/reviews.ts` |
| Fotos de la **galería** (categoría + alt) | `src/lib/data/gallery.ts` |
| Enlaces de navegación (keys) | `src/lib/data/navigation.ts` |
| **Textos de interfaz (EN/ES)** | `src/lib/i18n/dict.ts` |

## Bilingüe (EN / ES)

El sitio es **bilingüe con inglés por defecto** y un **selector de idioma** (botón EN/ES en el header, top bar y menú móvil).

- Estado de idioma: `src/lib/i18n/LanguageProvider.tsx` (React context + `localStorage`, refleja `<html lang>`).
- Todos los textos de UI: `src/lib/i18n/dict.ts` (`dict.en` / `dict.es`). Para editar un texto, cámbialo en ambos idiomas.
- Contenido bilingüe en datos: `menu.ts` (`description` / `descriptionEs`), `featured.ts` (`description`/`descriptionEs`, `tag`/`tagEs`), `reviews.ts` (`text`/`textEs`).
- Nombres de platillos (Birria, Menudo, Quesabirria…) se mantienen en español en ambos idiomas por autenticidad.
- Rutas en inglés: `/menu`, `/gallery`, `/visit`, `/privacy`.

### Horarios y "Abierto ahora"
El indicador se calcula solo con la zona horaria del restaurante (`America/Los_Angeles`).
Edita `restaurant.hours` (minutos desde medianoche; `null` = cerrado). No hay que tocar nada más.

### Fotografías
1. Coloca los JPG originales en `scripts/raw/`.
2. Ajusta el mapeo en `scripts/process-images.mjs`.
3. Ejecuta `node scripts/process-images.mjs` → genera WebP optimizados en `public/images/`.
4. Referencia las rutas nuevas en `gallery.ts` / `featured.ts`.

## Pendientes de verificar con el propietario (marcados con `TODO` en el código)

- **"Desde 1970"** — año de fundación provisto por el cliente, **no verificado** en fuentes públicas.
- **Foto de menudo** — actualmente usa una foto de caldo de birria como sustituto. Reemplazar por una real.
- **Coordenadas geográficas** exactas (JSON-LD) — aproximadas.
- **Historia** — el sitio actual no incluye reseña histórica; el texto es genérico y debe ampliarse.
- **Dominio final** — configurar `SITE_URL` en `src/lib/jsonld.ts` al publicar.
- **Instagram / otras redes** — solo se verificaron Facebook y Yelp.
- **Aviso de privacidad** — texto base, revisar legalmente.
- Sin sección de prensa: no se encontró reseña de prensa verificable en el sitio actual.
