import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/quick_learning_app' : '', // Use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/quick_learning_app' : '', // Serve static assets from base path
};

export default nextConfig;
