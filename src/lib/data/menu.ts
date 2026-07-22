// ============================================================
// Menu — EDITABLE. Prices verified from the current site (Jul 2026).
// "Prices already include tax." Dish names kept in Spanish (authentic);
// descriptions in English. Do not invent dishes, ingredients or prices.
// ============================================================

export interface MenuItem {
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEs?: string;
  /** Single price, e.g. "$12.50" */
  price?: string;
  /** Per-size prices */
  priceSmall?: string;
  priceLarge?: string;
  /** Meat variations or options */
  variations?: string[];
  tags?: string[];
  weekendOnly?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleEn: string;
  note?: string;
  items: MenuItem[];
}

export const menuNote = "Prices already include tax and are subject to change.";

export const menu: MenuCategory[] = [
  {
    id: "specialties",
    title: "Specialties",
    titleEn: "Especialidades",
    items: [
      {
        name: "Birria de Chivo",
        nameEn: "Goat birria stew",
        description:
          "Our traditional goat recipe, slow-cooked in its own chile broth until the meat falls apart.",
        descriptionEs:
          "Nuestra receta tradicional de chivo, cocida lento en su caldo de chiles hasta que la carne se deshace.",
        priceSmall: "$12.50",
        priceLarge: "$13.50",
        tags: ["Best seller", "Traditional"],
      },
      {
        name: "Birria con Arroz y Frijoles",
        nameEn: "Birria plate with rice & beans",
        description: "Full plate served with rice and house beans.",
        descriptionEs: "Plato completo servido con arroz y frijoles de la casa.",
        price: "$13.50",
        tags: ["House favorite"],
      },
      {
        name: "Birria 1 LB",
        nameEn: "One pound of birria",
        description: "A full pound of birria to take home and share.",
        descriptionEs: "Una libra de birria para llevar y compartir en casa.",
        price: "$22.00",
        tags: ["To share"],
      },
      {
        name: "Barbacoa",
        nameEn: "Beef stew with rice & beans",
        description: "Shredded beef in its sauce, with rice and beans.",
        descriptionEs: "Res deshebrada en su salsa, con arroz y frijoles.",
        price: "$12.50",
      },
      {
        name: "Menudo",
        nameEn: "Beef tripe stew",
        description: "The weekend classic. Saturday and Sunday only.",
        descriptionEs: "El clásico de fin de semana. Sábado y domingo únicamente.",
        priceSmall: "$9.00",
        priceLarge: "$11.00",
        tags: ["Weekend only"],
        weekendOnly: true,
      },
    ],
  },
  {
    id: "tacos-burritos",
    title: "Tacos & Burritos",
    titleEn: "Tacos y Burritos",
    items: [
      {
        name: "Tacos",
        nameEn: "Tacos",
        description: "On corn tortillas, with onion and cilantro.",
        descriptionEs: "En tortilla de maíz, con cebolla y cilantro.",
        price: "$1.60",
        variations: ["Asada", "Birria", "Barbacoa", "Chile Colorado"],
        tags: ["To share"],
      },
      {
        name: "Burritos",
        nameEn: "Burritos",
        description: "Flour tortilla filled with your favorite stew.",
        descriptionEs: "Tortilla de harina rellena de tu guiso favorito.",
        price: "$7.50",
        variations: ["Asada", "Birria", "Barbacoa", "Chile Colorado"],
      },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    titleEn: "Quesadillas",
    items: [
      {
        name: "Quesadilla de Queso",
        nameEn: "Cheese quesadilla",
        price: "$4.00",
      },
      {
        name: "Quesadilla con Carne / Quesabirria",
        nameEn: "Meat & cheese quesadilla",
        description: "Melted cheese with the meat of your choice.",
        descriptionEs: "Con queso fundido y la carne de tu elección.",
        price: "$7.50",
        tags: ["To share"],
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    titleEn: "Acompañamientos",
    items: [
      {
        name: "Arroz y Frijoles",
        nameEn: "Rice & beans",
        description: "As a side for any dish.",
        descriptionEs: "Como complemento de cualquier platillo.",
        price: "$1.50+",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    titleEn: "Bebidas",
    items: [
      {
        name: "Soda",
        nameEn: "Soft drink",
        price: "$1.35 (12oz) · $2.75 (20oz)",
      },
      {
        name: "Soda Mexicana",
        nameEn: "Mexican soda",
        price: "$2.25 (12oz) · $2.75 (20oz)",
      },
      { name: "Clamato", price: "$4.00" },
      { name: "Agua Embotellada", nameEn: "Bottled water", price: "$1.25" },
      { name: "Café", nameEn: "Coffee", price: "$1.25" },
    ],
  },
  {
    id: "beer",
    title: "Beer",
    titleEn: "Cervezas",
    items: [
      { name: "Cerveza Doméstica", nameEn: "Domestic beer", price: "$4.00" },
      { name: "Cerveza Importada", nameEn: "Imported beer", price: "$5.00" },
      { name: "Cerveza Chelada", nameEn: "Chelada", price: "$7.00" },
    ],
  },
];
