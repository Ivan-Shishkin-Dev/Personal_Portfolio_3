import type { MetadataRoute } from "next";
import { sections } from "@/content/sections";

const BASE = "https://ivanshishkin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    ...sections.map((s) => ({
      url: `${BASE}/${s.slug}`,
      lastModified: new Date(),
    })),
    { url: `${BASE}/consumed-content`, lastModified: new Date() },
  ];
}
