const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "scss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        include: [path.resolve("static"), path.resolve("src")],
        options: {
          limit: 100000,
          name: "[name].[hash:7].[ext]",
        },
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "许嵩",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    host: "localhost",
    hot: true,
    open: true,
  },
};
