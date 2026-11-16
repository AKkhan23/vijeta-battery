import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://vijetabattery.com/sitemap.xml",
    host: "https://vijetabattery.com",
  };
}
