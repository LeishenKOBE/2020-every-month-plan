const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          limit: 2048,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
  },
};
