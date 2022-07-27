/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
