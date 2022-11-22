//next.config.js
const basePath = process.env.NEXT_PUBLIC_IS_DEVELOPMENT ? "" : "/dvadesetjedan.com";

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
    path: "",
    domains: ["*.cloudfront.net/*"],
  },
  pageExtensions: ["page.tsx"],
};
