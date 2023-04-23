/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['labs.openai.com', 'bit.ly'],
  },
}

module.exports = nextConfig
