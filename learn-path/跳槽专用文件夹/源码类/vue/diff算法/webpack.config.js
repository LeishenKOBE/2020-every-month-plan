const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    publicPath: "xuni",
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    contentBase: "www",
  },
};
