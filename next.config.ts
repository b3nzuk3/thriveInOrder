import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  experimental: { cpus: 1, staticGenerationMaxConcurrency: 1 },
};

export default nextConfig;
