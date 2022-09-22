//next.config.js
const dev = process.env.NODE_ENV !== "production";
const basePath = dev ? "" : "/dvadesetjedan.com";

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  basePath,
  images: {
    loader: "akamai",
    path: "/",
  },
};
