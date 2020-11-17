import typescript from "@rollup/plugin-typescript2";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import cssnano from "cssnano";

const extensions = [".ts", ".js", ".tsx"];
export default [
  typescript({
    lib: ["es5", "es6", "dom"],
    target: "es5", // 输出目标
    noEmitOnError: true, // 运行时是否验证ts错误
  }),
  resolve({ mainFields: ["module", "main", "browser"] }),
  commonjs({ extensions, sourceMap: true }),
  babel({ babelHelpers: "bundled", extensions }), // babelHelpers是bable的最佳实践方案 extensions编译的扩展文件
  postcss({
    plugins: [cssnano],
    extract: "dist/css/z-style.css", //css 输出路径
  }),
];
