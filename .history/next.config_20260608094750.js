// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images2.imgbox.com', 'i.ibb.co', 'via.placeholder.com'],, // Add your image domains here
  },
};

module.exports = nextConfig;