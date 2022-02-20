/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.extensions.push(".tsx")
    config.resolve.extensions.push(".ts")
    return config
  },
}
