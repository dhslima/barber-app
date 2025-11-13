import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
