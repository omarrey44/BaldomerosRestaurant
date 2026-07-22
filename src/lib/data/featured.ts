// Featured dishes on the home page. Real photos from the current site. Bilingual.
export interface FeaturedDish {
  name: string;
  description: string; // English
  descriptionEs: string; // Spanish
  price: string;
  image: string;
  alt: string;
  tag?: string; // English
  tagEs?: string; // Spanish
  weekendOnly?: boolean;
}

export const featuredDishes: FeaturedDish[] = [
  {
    name: "Birria de Chivo",
    description:
      "Goat slow-cooked in its dried-chile broth. The dish that gave us our name.",
    descriptionEs:
      "Chivo cocido lento en su caldo de chiles secos. El platillo que nos dio nombre.",
    price: "$12.50",
    image: "/images/menu/birria.webp",
    alt: "Bowl of goat birria with ribs and red broth",
    tag: "Best seller",
    tagEs: "Más pedido",
  },
  {
    name: "Birria con Arroz y Frijoles",
    description:
      "Full plate — shredded beef in its sauce with rice and house beans.",
    descriptionEs:
      "Plato completo, res deshebrada en su salsa con arroz y frijoles de la casa.",
    price: "$13.50",
    image: "/images/menu/birria-plato.webp",
    alt: "Birria plate with rice, beans and lime",
    tag: "House favorite",
    tagEs: "Favorito de la casa",
  },
  {
    name: "Menudo",
    description: "The comforting weekend classic. Saturday and Sunday.",
    descriptionEs:
      "El clásico reconfortante de fin de semana. Sábado y domingo.",
    price: "$9.00",
    // TODO: replace with a real menudo photo (current photo is birria broth).
    image: "/images/menu/menudo.webp",
    alt: "Bowl of red Jalisco-style broth served with condiments",
    tag: "Weekend only",
    tagEs: "Fin de semana",
    weekendOnly: true,
  },
  {
    name: "Tacos",
    description:
      "Corn tortilla, onion and cilantro. Asada, birria, barbacoa or chile colorado.",
    descriptionEs:
      "Tortilla de maíz, cebolla y cilantro. Asada, birria, barbacoa o chile colorado.",
    price: "$1.60",
    image: "/images/menu/tacos.webp",
    alt: "Four meat tacos with cilantro and onion",
    tag: "To share",
    tagEs: "Para compartir",
  },
  {
    name: "Burrito",
    description: "Flour tortilla filled with your favorite stew, bathed in broth.",
    descriptionEs:
      "Tortilla de harina rellena de tu guiso favorito, bañado en caldo.",
    price: "$7.50",
    image: "/images/menu/burrito.webp",
    alt: "Golden burrito bathed in broth with condiments around it",
    tag: "Traditional",
    tagEs: "Tradicional",
  },
  {
    name: "Quesabirria",
    description: "Quesadilla with melted cheese and birria. Pairs with consomé.",
    descriptionEs:
      "Quesadilla con queso fundido y birria. Para acompañar con consomé.",
    price: "$7.50",
    image: "/images/menu/quesabirria.webp",
    alt: "Birria quesadilla with cheese, rice and beans",
    tag: "To share",
    tagEs: "Para compartir",
  },
];
