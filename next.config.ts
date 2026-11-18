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
};

export default nextConfig;
