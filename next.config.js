/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.cdn.nrholding.net',
        port: '',
        pathname: '/*/*/**',
      },
    ],
  },
}

module.exports = nextConfig
