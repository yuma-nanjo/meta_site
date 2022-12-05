/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|woff|svg|eot|ttf|woff2|otf)$/,
        loader: "url-loader?limit=8192&name=images/[name].[ext]",
      },
    ],
  },
};

module.exports = nextConfig;
