const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8080,
    publicPath: "/xuni/",
    open: true,
  },
};
