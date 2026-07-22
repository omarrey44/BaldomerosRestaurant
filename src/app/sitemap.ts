import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jsonld";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/gallery", "/visit", "/privacy"];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
