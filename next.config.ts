import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/real-estate/' : '',
  trailingSlash: true,
};

export default nextConfig;
