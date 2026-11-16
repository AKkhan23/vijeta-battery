import type { MetadataRoute } from "next";

const base = "https://vijetabattery.com";
const lastModified = new Date("2026-11-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/technology`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/warranty`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/dealership`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
