module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    publicPath: "xuni",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    contentBase: "www",
  },
};
