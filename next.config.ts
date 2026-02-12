import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "bytegrad.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
