/** @type {import('next').NextConfig} */

const domains = ["localhost", "lumiere-a.akamaihd.net"];

const nextConfig = {
  images: {
    domains: domains,
  },
};

module.exports = nextConfig;
