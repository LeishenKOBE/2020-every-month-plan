const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");
const { file } = require("@babel/types");

function stepOne(filename) {
  // 读入文件
  const content = fs.readFileSync(filename, "utf-8");
  const ast = parser.parse(content, {
    sourceType: "module",
  });
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      const newFile = "./" + path.join(dirname, node.source.value);
      dependencies[node.source.value] = newFile;
    },
  });
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });
  return {
    filename,
    dependencies,
    code,
  };
}

function stepTwo(entry) {
  const entryModule = stepOne(entry);
  const graphArr = [entryModule];
  for (let i = 0; i < graphArr.length; i += 1) {
    const item = graphArr[i];
    const { dependencies } = item;
    for (let j in dependencies) {
      graphArr.push(stepOne(dependencies[j]));
    }
  }
  const graph = {};
  graphArr.forEach((item) => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code,
    };
  });
  return graph;
}

function step3(entry) {
  const graph = JSON.stringify(stepTwo(entry));

  return `
  (function (graph) {
    function require(module){
        function localRequire(relativePath) {
            return require(graph[module].dependencies[relativePath]);
        }
        var exports = {};
        (function(require, exports,code) {
            eval(code)
        })(localRequire,exports,graph[module].code);
        return exports;
    }
    require('${entry}')
    })(${graph});
  `;
}

const code = step3("./src/index.js");
fs.writeFileSync("./dist/bundle.js", code, { encoding: "utf-8" });
