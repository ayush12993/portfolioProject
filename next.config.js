/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // https://nextjs.org/docs/advanced-features/compiler#styled-components
  compiler: {
    styledComponents: true 
  },

  // npm install @svgr/webpack
  // allows SVGs to be imported as React components
  // ex: import Logo from "./icons/Logo.svg"
  // This is defualt in create-react-app
  // https://dev.to/dolearning/importing-svgs-to-next-js-nna
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
