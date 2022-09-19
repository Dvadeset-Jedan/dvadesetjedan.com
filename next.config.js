//next.config.js
const dev = process.env.NODE_ENV !== "production";

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  assetPrefix: dev ? "" : "./",
  images: {
    loader: "akamai",
    path: "",
  },
};
