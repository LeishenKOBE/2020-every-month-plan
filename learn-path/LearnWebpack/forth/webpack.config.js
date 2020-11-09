const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CleanWebpackPlugin()
  ],
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  },
  devServer:{
      contentBase: path.resolve(__dirname, "dist"),
      host: "localhost",
      port: 3000,
      open: true
  }
};
