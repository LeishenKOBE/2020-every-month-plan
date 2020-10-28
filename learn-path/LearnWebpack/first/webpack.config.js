const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        loader: "url-loader",
        options: {
          limit: 10000,
          esModule: false,
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.html/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "许嵩",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
    open: true,
  },
};
