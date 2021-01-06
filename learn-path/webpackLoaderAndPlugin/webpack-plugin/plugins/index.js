const fs = require('fs');

class RemoveLogs {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('RemoveLogs', (stats) => {
      const {path, filename} = stats.compilation.options.output;
      try {
        let filePath = path + '/' + filename;
        fs.readFile(filePath, 'utf8', (err, res) => {
          if (err) console.log(err);
          fs.readFile(filePath, 'utf8', (err, data) => {
            const rgx = /console.log\(['|"](.*?)['|"]\)/;
            const newdata = data.replace(rgx, '');
            if (err) console.log(err);
            fs.writeFile(filePath, newdata, function (err) {
              if (err) {
                return console.log(err);
              }
              console.log('Logs Removed');
            });
          });
        });
      } catch (e) {
        console.log(e);
      }
    });
  }
}
module.exports = RemoveLogs;
