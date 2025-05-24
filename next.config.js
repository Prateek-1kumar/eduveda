/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remove unoptimized for Vercel deployment
    // unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  // Add output configuration for Vercel
  output: 'standalone',
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
  // Add support for Vercel Analytics
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
