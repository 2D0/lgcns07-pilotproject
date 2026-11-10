import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // 첫 주소(/)로 오면 스터디 목록으로
  async redirects() {
    return [{ source: "/", destination: "/studies", permanent: false }];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
