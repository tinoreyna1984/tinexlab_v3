/** @type {import('next').NextConfig} */

const path = require('path');


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
}

module.exports = nextConfig
