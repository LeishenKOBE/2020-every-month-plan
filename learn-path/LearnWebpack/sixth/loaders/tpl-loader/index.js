const { tplReplace } = require("../utils");
const { getOptions } = require("loader-utils");

function tplloader(source) {
  source = source.replace(/\s+/g, "");
  const { log } = getOptions(this);
    const demo = this.resourcePath.replace(/\//g, "/");
  console.log(typeof this.resourcePath);
  const _log = log
    ? `console.log("hello worldcompiled the file which is from")`
    : "";
  return `
        export default (options) => {
            ${tplReplace.toString()}
            ${_log.toString()}
            return tplReplace('${source}', options);
        }
    `;
}

module.exports = tplloader;
