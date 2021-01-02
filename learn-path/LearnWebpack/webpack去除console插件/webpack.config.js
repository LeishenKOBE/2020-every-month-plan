const fs = require("fs");

class RemoveLogs {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap("GetFileNamePlugin", (compilation) => {
      compilation.hooks.chunkIds.tap("GetFileNamePlugin", (c) => {
        this.filename = Array.from(c)[0].name;
      });
    });

    compiler.hooks.done.tap("RemoveLogs", (stats) => {
      console.log("我要移除所有console");
      this.removeAllLogs(stats);
    });
  }
  removeAllLogs(stats) {
    const { path, filename } = stats.compilation.options.output;
    let filePath = (path + "/" + filename).replace(/\[name\]/g, this.filename);
    fs.readFile(filePath, "utf-8", (err, data) => {
      const rgx = /console.log\(['|"](.*?)['|"]\)/;
      const newData = data.replace(rgx, "");
      if (err) console.log(err);
      fs.writeFile(filePath, newData, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Logs Removed");
      });
    });
  }
}

module.exports = {
  entry: "./index.js",
  plugins: [new RemoveLogs()],
};
