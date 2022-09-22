//next.config.js
const dev = process.env.NODE_ENV !== "production";
const GH_PAGES_SUBDIRECTORY = dev ? "" : "/dvadesetjedan.com";

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  basePath: GH_PAGES_SUBDIRECTORY,
  images: {
    loader: "akamai",
    path: "/",
  },
};
