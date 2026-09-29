import type { MetadataRoute } from "next";
import { units } from "@/content/units";
import { identity } from "@/content/identity";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = identity.baseUrl;
  const now = new Date();
  const routes = ["", "/work", "/how", "/log", "/me", "/contact"].map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
  }));
  const unitRoutes = units.map((u) => ({
    url: `${base}/work/${u.slug}`,
    lastModified: now,
  }));
  return [...routes, ...unitRoutes];
}
