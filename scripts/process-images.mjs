// Image processing: raw JPEGs -> optimized WebP, categorized into /public/images.
// Run once with: node scripts/process-images.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW = path.join(__dirname, "raw");
const OUT = path.join(__dirname, "..", "public", "images");

// [source, destination (no ext), max width]
const jobs = [
  // Hero
  ["birria_a.jpg", "hero/birria-hero", 2000],
  // Featured / menu dishes
  ["birria_c.jpg", "menu/birria", 1500],
  ["dsc954.jpg", "menu/birria-plato", 1500],
  ["birria_c.jpg", "menu/menudo", 1500], // TODO: reemplazar por foto real de menudo
  ["dsc926.jpg", "menu/tacos", 1500],
  ["burrito.jpg", "menu/burrito", 1500],
  ["dsc975.jpg", "menu/quesabirria", 1500],
  ["dsc918.jpg", "menu/tacos-alt", 1500],
  // Gallery - birria
  ["birria_a.jpg", "gallery/birria-1", 1600],
  ["birria_c.jpg", "gallery/birria-2", 1600],
  // Gallery - tacos & burritos
  ["dsc926.jpg", "gallery/tacos-1", 1600],
  ["dsc918.jpg", "gallery/tacos-2", 1600],
  ["taco.jpg", "gallery/tacos-3", 1600],
  ["burrito.jpg", "gallery/burrito-1", 1600],
  // Gallery - especialidades / platos
  ["dsc954.jpg", "gallery/plato-1", 1600],
  ["dsc975.jpg", "gallery/plato-2", 1600],
  ["dsc936.jpg", "gallery/food-1", 1600],
  ["dsc982.jpg", "gallery/food-2", 1600],
  // Gallery - el restaurante
  ["front.jpg", "gallery/restaurante-1", 1600],
  ["inside.jpg", "gallery/restaurante-2", 1600],
  ["img08.jpg", "gallery/restaurante-3", 1600],
  // Gallery - comunidad
  ["img12.jpg", "gallery/comunidad-1", 1600],
  ["img13.jpg", "gallery/comunidad-2", 1600],
  ["img14.jpg", "gallery/comunidad-3", 1600],
  ["misc1.jpg", "gallery/comunidad-4", 1600],
  ["misc2.jpg", "gallery/comunidad-5", 1600],
  // History
  ["sign.jpg", "history/letrero", 1500],
  ["front.jpg", "history/fachada", 1500],
  // Location
  ["front.jpg", "location/fachada", 1500],
];

async function run() {
  const dirs = new Set(jobs.map((j) => path.dirname(path.join(OUT, j[1]))));
  for (const d of dirs) await mkdir(d, { recursive: true });

  for (const [src, dest, width] of jobs) {
    const outPath = path.join(OUT, dest + ".webp");
    await sharp(path.join(RAW, src))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log("->", dest + ".webp");
  }

  // Logo: transparent-friendly PNG + webp, plus square app icons.
  const logo = path.join(RAW, "logo.jpeg");
  await mkdir(path.join(OUT, "brand"), { recursive: true });
  await sharp(logo).resize({ width: 512 }).webp({ quality: 90 }).toFile(path.join(OUT, "brand", "logo.webp"));
  await sharp(logo).resize({ width: 512 }).png().toFile(path.join(OUT, "brand", "logo.png"));

  // Favicon / app icons (Next reads src/app/icon.png & apple-icon.png)
  const appDir = path.join(__dirname, "..", "src", "app");
  await sharp(logo).resize(512, 512, { fit: "cover" }).png().toFile(path.join(appDir, "icon.png"));
  await sharp(logo).resize(180, 180, { fit: "cover" }).png().toFile(path.join(appDir, "apple-icon.png"));

  console.log("done");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
