import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: "https",
        hostname: "static.mamikos.com",
      },
      {
        protocol: "https",
        hostname: "mamikos.com",
      },
    ],
  },
};

export default nextConfig;
