const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
  pwa: {
    dest: 'public',
  },
})

module.exports = nextConfig
