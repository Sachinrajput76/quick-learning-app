import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // Use basePath in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '', // Serve static assets from base path
};

export default nextConfig;
