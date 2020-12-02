/* craco.config.js */

module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: "entry", // browserslist环境不支持的所有垫片都导入
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
    ],
    plugins: [
      // 配置 babel-plugin-import
      [
        "import",
        { libraryName: "antd", libraryDirectory: "es", style: true },
        "antd",
      ],
      // 配置解析器
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["babel-plugin-styled-components", { displayName: true }],
    ],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
