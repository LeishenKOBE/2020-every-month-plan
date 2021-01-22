const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    publicPath: 'xuni',
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 7777,
    hot: true,
    open: true,
    contentBase: "www",
  },
};
