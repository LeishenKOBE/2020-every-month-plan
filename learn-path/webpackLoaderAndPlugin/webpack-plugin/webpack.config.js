const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');
const RemoveLogs = require('./plugins/index.js');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve('dist', 'index.js'),
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new BitBarWebpackProgressPlugin(),
    new RemoveLogs({name: '许嵩'}),
  ],
};
