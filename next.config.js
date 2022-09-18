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
    domains: ["d3t3ozftmdmh3i.cloudfront.net"],
    loader: "akamai",
    path: "",
  },
};
