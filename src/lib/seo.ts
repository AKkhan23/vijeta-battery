import type { Metadata } from "next";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · VIJETA Batteries`,
      description,
      url: path,
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "VIJETA Batteries" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
