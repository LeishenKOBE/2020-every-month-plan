const loaderUtils = require("loader-utils");

module.exports = function (source) {
  const obj = loaderUtils.getOptions(this);
  console.log(obj);
  const json = JSON.stringify(source)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\u2029");

  return `
    export default ${json}
  `;
};
