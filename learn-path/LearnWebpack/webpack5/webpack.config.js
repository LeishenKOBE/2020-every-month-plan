module.exports = {
  entry: "./src/index.js",
  output: {},
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
        generator: {
          // [ext]前面自带"."
          filename: "assets/[hash:8].[name][ext]",
        },
      },
    ],
  },
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
};
