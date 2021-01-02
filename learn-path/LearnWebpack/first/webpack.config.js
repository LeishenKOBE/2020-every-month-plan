const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: "[name]_[hash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3030,
    hot: true,
    open: true,
    proxy: {
      "/api": "http://localhost:3030",
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|txt|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name]_[hash].[ext]",
            limit: 1024 * 10,
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};
