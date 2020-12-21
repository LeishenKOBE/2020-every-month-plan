const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const parser = require("@babel/parser"); // 转换ast
const traverse = require("@babel/traverse").default; // 遍历ast

const getCode = (entry) => {
  const code = fs.readFileSync(entry, "utf8");
  const dirname = path.dirname(entry);
  const ast = parser.parse(code, {
    sourceType: "module",
  });
  const deps = {};
  traverse(ast, {
    ImportDeclaration(p) {
      const importPath = p.get("source").node.value;
      const asbPath = "./" + path.join(dirname, importPath);
      deps[importPath] = asbPath;
    },
  });
  const { code: transCode } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });
  return { entry, deps, transCode };
};

const recurrentGetCode = (entry) => {
  const entryInfo = getCode(entry);
  const allInfo = [entryInfo];
  const recurrenceDeps = (deps, modules) => {
    Object.keys(deps).forEach((key) => {
      const info = getCode(deps[key]);
      modules.push(info);
      recurrenceDeps(info.deps, allInfo);
    });
  };
  recurrenceDeps(entryInfo.deps, allInfo);
  const webpack_modules = {};
  allInfo.forEach((item) => {
    webpack_modules[item.entry] = {
      deps: item.deps,
      code: item.transCode,
    };
  });
  return webpack_modules;
};

const webpack_modules = recurrentGetCode("./src/index.js");
const writeFunction = `((content)=>{
    const require = (path)=>{
        const getSrcPath = (p)=>{
            const srcPath = content[path].deps[p]
            return require(srcPath)
        }
        const exports = {};
        ((require,exports,code)=>{
            eval(code)
        })(getSrcPath,exports,content[path].code)
        return exports
    }
    require('./src/index.js')
})(${JSON.stringify(webpack_modules)})`;
fs.writeFileSync("./exs.js", writeFunction);
