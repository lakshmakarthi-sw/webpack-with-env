const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.config.js");

const devConfig = {
  mode: "development",
  devServer: {
      port: 8081,
      open: true,
      hot: true,
      historyApiFallback: true
      //watchContentBase: true, 
  },
  plugins: [
    new EnvironmentPlugin({
      API_URL: "http://localhost:3001/",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);