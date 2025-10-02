import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.ts',
      },
    },
  }
};

export default nextConfig;
