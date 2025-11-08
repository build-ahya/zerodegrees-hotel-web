import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "zerodegreeshotel.ng",
      "zerodegreeshotel.vercel.app",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
