import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/real-estate' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/real-estate/' : '',
  trailingSlash: true,
};

export default nextConfig;
