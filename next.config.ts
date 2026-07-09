import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Emily-Portfolio",
  assetPrefix: "/Emily-Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
