const path = "dist/";
const output = [];

if (process.env.NODE_ENV !== "production") {
  ["iife", "es", "umd"].forEach((item) => {
    output.push({
      file: path + item + ".min.js",
      format: item,
      name: "chartv",
    });
  });
} else {
  output.push({
    file: "dist/index.min.js",
    format: "es",
    name: "chartv",
  });
}

export default output;
