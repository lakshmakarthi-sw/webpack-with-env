const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.config.js");

const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      API_URL: "http://localhost:3001/",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);