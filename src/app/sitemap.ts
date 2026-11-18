import type { MetadataRoute } from "next";
import { homePowerGroups, homePowerSeries } from "@/lib/homePower";

const base = "https://vijetabattery.com";
const lastModified = new Date("2026-11-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const homePowerPages: MetadataRoute.Sitemap = [
    ...homePowerGroups.map((group) => ({
      url: `${base}/products/${group.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...homePowerSeries.map((series) => ({
      url: `${base}/products/${series.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${base}/products`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...homePowerPages,
    { url: `${base}/technology`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/warranty`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/dealership`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
