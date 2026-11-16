import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIJETA Batteries",
    short_name: "VIJETA",
    description:
      "Lead-acid batteries for cars, tractors, trucks, rickshaws and industry. Since 1988.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f5f2",
    theme_color: "#1638c6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
