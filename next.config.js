/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  //cancel render twice 
  reactStrictMode: false,
}

module.exports = nextConfig
