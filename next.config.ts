import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'standalone',
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
