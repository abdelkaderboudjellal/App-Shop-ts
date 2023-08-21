/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com", "m.media-amazon.com", "img.freepik.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
