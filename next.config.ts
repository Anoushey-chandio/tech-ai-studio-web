import type { NextConfig } from "next";

const longCache = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/videos/:path*", headers: longCache },
      { source: "/posters/:path*", headers: longCache },
    ];
  },
};

export default nextConfig;
