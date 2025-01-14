import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  basePath: '/quick-learning-app',
  assetPrefix: '/quick-learning-app',
  trailingSlash: true // Optional, but helps with GitHub Pages
};

export default nextConfig;
