import jsx from "acorn-jsx";
import plugins from "./buildconfig/plugins";
import output from "./buildconfig/output";

export default {
  index: "./src/index.js",
  output,
  plugins,
  acronInjectPlugins: [jsx()],
  externals: ["vue", "@antv/g2"],
};
