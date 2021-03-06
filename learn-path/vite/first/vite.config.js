const path = require("path");

module.exports = {
  alias: {
    // 路径映射必须以/开头和结尾
    "/comps/": path.resolve(__dirname, "src/components"),
  },
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  },
};
