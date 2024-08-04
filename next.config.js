/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    workerThreads: false,
    cpus: 1
  },
}

module.exports = nextConfig
