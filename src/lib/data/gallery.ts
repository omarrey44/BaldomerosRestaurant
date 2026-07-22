// Galería — fotografías reales del sitio actual, organizadas por categoría.
// Las fotos de archivo (letrero/fachada antiguos) se marcan como "Archivo Baldomeros".
export type GalleryCategory =
  | "Birria"
  | "Tacos y Burritos"
  | "Especialidades"
  | "El Restaurante"
  | "Historia"
  | "Comunidad";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  archive?: boolean;
  /** Tamaño en el mosaico */
  span?: "tall" | "wide" | "normal";
}

export const galleryCategories: GalleryCategory[] = [
  "Birria",
  "Tacos y Burritos",
  "Especialidades",
  "El Restaurante",
  "Historia",
  "Comunidad",
];

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery/birria-1.webp",
    alt: "Tazón de birria de chivo con costillas, limón y cerveza",
    category: "Birria",
    span: "tall",
  },
  {
    src: "/images/gallery/birria-2.webp",
    alt: "Birria de chivo humeante en tazón blanco sobre la mesa",
    category: "Birria",
  },
  {
    src: "/images/gallery/tacos-1.webp",
    alt: "Cuatro tacos de carne con cilantro y cebolla vistos desde arriba",
    category: "Tacos y Burritos",
    span: "wide",
  },
  {
    src: "/images/gallery/tacos-2.webp",
    alt: "Tres tacos de carne asada en plato blanco",
    category: "Tacos y Burritos",
  },
  {
    src: "/images/gallery/tacos-3.webp",
    alt: "Tacos servidos con limón, salsa y condimentos",
    category: "Tacos y Burritos",
    span: "tall",
  },
  {
    src: "/images/gallery/burrito-1.webp",
    alt: "Burrito dorado bañado en caldo con guarniciones",
    category: "Tacos y Burritos",
  },
  {
    src: "/images/gallery/plato-1.webp",
    alt: "Plato de barbacoa con arroz, frijoles y limón",
    category: "Especialidades",
    span: "wide",
  },
  {
    src: "/images/gallery/plato-2.webp",
    alt: "Quesabirria con arroz y frijoles",
    category: "Especialidades",
  },
  {
    src: "/images/gallery/food-1.webp",
    alt: "Especialidad de la casa servida en la mesa",
    category: "Especialidades",
  },
  {
    src: "/images/gallery/food-2.webp",
    alt: "Platillo mexicano tradicional de Birriería Baldomeros",
    category: "Especialidades",
  },
  {
    src: "/images/gallery/restaurante-1.webp",
    alt: "Fachada del restaurante Birriería Baldomeros #2",
    category: "El Restaurante",
    span: "tall",
  },
  {
    src: "/images/gallery/restaurante-2.webp",
    alt: "Interior del comedor del restaurante",
    category: "El Restaurante",
  },
  {
    src: "/images/gallery/restaurante-3.webp",
    alt: "Rincón del restaurante Birriería Baldomeros",
    category: "El Restaurante",
  },
  {
    src: "/images/history/letrero.webp",
    alt: "Letrero clásico de Birriería Baldomeros",
    category: "Historia",
    archive: true,
    span: "wide",
  },
  {
    src: "/images/gallery/comunidad-1.webp",
    alt: "Momento en Birriería Baldomeros con la comunidad",
    category: "Comunidad",
  },
  {
    src: "/images/gallery/comunidad-2.webp",
    alt: "Clientes disfrutando en el restaurante",
    category: "Comunidad",
  },
  {
    src: "/images/gallery/comunidad-3.webp",
    alt: "Ambiente familiar en Birriería Baldomeros",
    category: "Comunidad",
  },
  {
    src: "/images/gallery/comunidad-4.webp",
    alt: "Detalle del servicio en Birriería Baldomeros",
    category: "Comunidad",
  },
  {
    src: "/images/gallery/comunidad-5.webp",
    alt: "Tradición mexicana en la mesa",
    category: "Comunidad",
  },
];
