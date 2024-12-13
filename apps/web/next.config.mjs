/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@repo/invvarch-ui"],
  experimental: {
    appDir: true,
  }
};

export default nextConfig;
