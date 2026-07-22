// Real customer reviews (Google), edited for the site. Bilingual.
// Do not show 5 stars or averages unless verified.
export interface Review {
  name: string;
  text: string; // English
  textEs: string; // Spanish
}

export const reviews: Review[] = [
  {
    name: "Abraham Falcon",
    text: "The best place in Los Angeles to enjoy authentic goat birria. The food is excellent and so is the service.",
    textEs:
      "El mejor lugar de Los Ángeles para disfrutar una auténtica birria de chivo. La comida es excelente y el servicio también.",
  },
  {
    name: "Mirna Rodriguez",
    text: "I love their goat birria and the menudo. So much flavor, not greasy and perfectly seasoned. The best Jalisco-style goat barbacoa in the city.",
    textEs:
      "Me encanta su birria de chivo y el menudo. Tienen muchísimo sabor, no son grasosos y están perfectamente sazonados. La mejor barbacoa de chivo estilo Jalisco de la ciudad.",
  },
  {
    name: "Miguel Martinez",
    text: "Great service. The birria and the menudo are delicious. Definitely a place I recommend.",
    textEs:
      "Muy buen servicio. La birria y el menudo están deliciosos. Definitivamente es un lugar que recomiendo.",
  },
  {
    name: "Lupita Rangel",
    text: "The birria is delicious and the staff is very friendly. I highly recommend it.",
    textEs:
      "La birria está deliciosa y el personal es muy amable. Se las recomiendo muchísimo.",
  },
  {
    name: "Claudia Fernandez",
    text: "It's the best birria I've ever had! From the moment we arrived they welcomed us so kindly. I can't wait to come back.",
    textEs:
      "¡Es la mejor birria que he probado! Desde que llegamos nos recibieron de una manera muy amable. Definitivamente espero regresar.",
  },
];
