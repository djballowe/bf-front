/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ballpark-factor.s3.us-west-1.amazonaws.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
