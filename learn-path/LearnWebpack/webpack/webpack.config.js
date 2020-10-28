const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    hot: true,
  },
};
