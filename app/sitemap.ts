import type { MetadataRoute } from "next";
import { sections } from "@/content/sections";

const BASE = "https://ivanshishkin.com";
const lastModified = new Date(process.env.NEXT_PUBLIC_LAST_EDITED ?? Date.now());

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified },
    ...sections.map((s) => ({
      url: `${BASE}/${s.slug}`,
      lastModified,
    })),
    { url: `${BASE}/consumed-content`, lastModified },
  ];
}
