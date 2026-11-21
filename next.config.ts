import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Next 16 blocks dev resources (including the HMR websocket) when the site
  // is opened via 127.0.0.1 or the LAN IP. Without this, the browser keeps
  // reconnecting/reloading and the preloader flashes on every navigation.
  allowedDevOrigins: ["127.0.0.1", "192.168.1.6"],
  turbopack: {
    root: path.resolve("."),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Ensure proper MIME types and caching for video files on Vercel
  async headers() {
    return [
      {
        source: "/:path*.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.webm",
        headers: [
          { key: "Content-Type", value: "video/webm" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.mov",
        headers: [
          { key: "Content-Type", value: "video/quicktime" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
