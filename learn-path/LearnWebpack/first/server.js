const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const compiler = webpack(config);

const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(9999, () => {
  console.log("server is running at http://localhost:9999");
});
