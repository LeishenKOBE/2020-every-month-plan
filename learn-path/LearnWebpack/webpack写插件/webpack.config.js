const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HelloPlugin = require("./plugins/index");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
    new HelloPlugin({ msg: "hello world" }),
  ],
};
