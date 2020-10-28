const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.conf.js");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: "8080", //默认是8080
    hot: true, // 开启模块热替换
    publicPath: "/", // 构建好的静态文件访问路径，可以和output.publicPath保持一致
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: true, //启用浮层提示
    clientLogLevel: "silent", //日志等级
    compress: false, //是否启用 gzip 压缩
    contentBase: path.join(__dirname, "../public"), // 配置额外的静态文件内容的访问路径
    proxy: {
      // 请求代理,解决开发环境跨域问题
      // 根据情况配置
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "cheap-module-eval-source-map",
});
