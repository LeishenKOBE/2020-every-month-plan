// 首先，我们需要先接收一个字符串，并设置两个变量
function tokenizer(input) {
  // current表示现在在源代码中什么位置
  let current = 0;
  // 用来存储词素的数组
  let tokens = [];

  // 我们从创建一个while循环开始，在这个循环里我们将要增加current的值
  // 注意由于词素的长度不同，我们需要在一次循环中多次增加current的值
  while (current < input.length) {
    let char = input[current];
    // 我们需要坚持的第一个情况就是开括号，这在之后会被函数调用`CallExpression`所用到。但是
    // 现在我只需要关系字符串就行。

    // 我们检测到是否有一个开括号
    if (char === "(") {
      // 如果我们有一个开括号，我们创建一个类型为paren的词素并将value设为开括号
      tokens.push({
        type: "paren",
        value: "(",
      });
      current++;
      continue;
    }

    // 接下来就是检测闭括号
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }
    // 接下来就是检测空格，但是空格只是为了易读而被添加的
    //所以这里我没仅仅检测当前字符是否是一个空格，如果是我们就进入下一个循环
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 接下来就是捕获数字，由于数字包含任意数量的字符，我们需要捕获所有数字
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";
      // 之后我们变量序列中每一个字符知道不是数字
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: "number",
        value,
      });
      continue;
    }
    // 检测字符串，字符串由双引号包裹
    if (char === '"') {
      let value = "";
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      // 跳过字符串结尾的引号
      char = input[++current];
      tokens.push({ type: "string", value });
      continue;
    }
    // 最后一种词素是name词素。这是一个字符序列
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "name", value });
      continue;
    }
    // 最后如果我们并不能匹配到任何情况的话，我们就抛出一个错误并退出。
    throw new TypeError("I dont know what this character is: " + char);
  }
  // 最后我们返回词素数组tokens。
  return tokens;
}

// 解析函数，接收一个词素数组
function parser(tokens) {
  let current = 0;
  // 这里要使用递归而不是循环
  function walk() {
    let token = tokens[current];

    // 针对不同类型的词素，处理方式也不同，从数字词素开始
    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }
    // 字符串
    if (token.type === "string") {
      current++;
      return {
        type: "StringLiteral",
        value: token.value,
      };
    }

    // 接下来判断是否是一个函数调用，碰到开括号的时候
    if (token.type === "paren" && token.value === "(") {
      // 我们会增加current变量的值来跳过开括号以选取下一个词素，因为在抽象语法树中括号并没有什么卵用
      token = tokens[++current];
      // 我们创建一个CallExpression的基础词素，之后我们会将它的名字设置为当前词素的value
      // 这是因为开括号之后词素的value就是函数的名字
      let node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };
      token = tokens[++current];
      // 现在我们遍历每一个会成为我们CallExpression词素的params的词素直到我们遇到一个闭括号为止
      // 这就是需要递归的时候。我们使用递归而不是试图直接分析可能有无限多层嵌套节点的参数
      while (
        token.type !== "paren" ||
        (token.type === "paren" && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }

      current++;
      return node;
    }
    // 同样，如果我们没有匹配到以上任何类型，我们抛出一个错误。
    throw new TypeError(token.type);
  }

  // 创建抽象语法树
  let ast = {
    type: "Program",
    body: [],
  };

  // 然后我们调用我们的`walk`函数，将返回的节点都添加到`ast.body`数组中。
  // 我们在一个循环中这样做的原因是因为我们可能有多个单独的函数调用，而不是相互嵌套。
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
}

// 现在已经有了抽象语法树，而我们希望可以使用一个访问者对象来访问各个节点我们需要能够在碰到一个节点的时候调用访问者对象对应的方法。
// 我们定义一个traverser函数，这个函数接收抽象语法树以及一个访问者对象

function traverser(ast, visitor) {
  function traverseArray(array, parent) {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  }
  // traverseNode这个函数会接收一个节点以及这个节点的父节点，这样它就可以将这两个参数传递给我们的访问者对象的方法
  function traverseNode(node, parent) {
    let methods = visitor[node.type];
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }
    switch (node.type) {
      case "Program":
        traverseArray(node.body, node);
        break;
      case "CallExpression":
        traverseArray(node.params, node);
        break;
      case "NumberLiteral":
      case "StringLiteral":
        break;
      default:
        throw new TypeError(node.type);
    }
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  traverseNode(ast, null);
}

// 接下来是转换器。我们的转换器会接收我们创造的抽象语法树并将它和一个访问者对象传给traverser函数。然后创建生成一个新的抽象语法树
// 所以我们定义一个transformer函数，这个函数接受一个抽象语法树对象
function transformer(ast) {
  // 我们会创建一个newAst，这个新抽象语法树和之前的抽象语法树一样有一个Program节点
  let newAst = {
    type: "Program",
    body: [],
  };
  // 接下来我会小小的作弊一下并使用一个小小的hack。我们会给父节点添加一个context属性，我们会将
  // 子节点添加到他们的父节点的context属性中。通常情况下你会有一个比这个更好的抽象
  // 但是针对我们的目的，这样更简洁

  // 只要记住context是一个从旧的抽象语法树到新的抽象语法树的引用即可。

  ast._context = newAst.body;
  // 我们从调用traverser函数并传入抽象语法树和访问者对象开始
  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        // 我们创建一个NumberLiteral类型的新节点并添加到父节点的context
        parent._context.push({
          type: "NumberLiteral",
          value: node.value,
        });
      },
    },
    // 接下来是StringLiteral类型节点'
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "StringLiteral",
          value: node.value,
        });
      },
    },
    // 接下来是CallExpression类型节点
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: "CallExpression",
          callee: {
            type: "Identifier",
            name: node.name,
          },
          arguments: [],
        };

        // 接下来我们给原始的CallExpression节点定义一个context属性。这个属性指向exporession的arguments属性，这样我们就可以添加参数了
        node._context = expression.arguments;
        // 接下来我们检测父节点是否是一个CallExpression
        if (parent.type !== "CallExpression") {
          // 我们将我们的CallExpression节点包裹在ExpressionStatement节点中
          // 我们这样做的原因是因为JS中顶层的CallExpression实际上是语句
          expression = {
            type: "ExpressionStatement",
            expression: expression,
          };
        }
        // 最后，我们将我们的CallExpression添加到父节点的context属性
        parent._context.push(expression);
      },
    },
  });
  // 最后，转换器返回川新的抽象语法树
  return newAst;
}

// 代码生成器
// 我们的代码生成器会递归的调用自身将树中的每一个节点打印出来，最终形成一个巨大的字符串

function codeGenerator(node) {
  switch (node.type) {
    // 如果我们有一个`Program`节点。我们会使用代码生成器遍历`body`属性中的所有节点然后使用
    // 换行符\n连接起来。
    case "Program":
      return node.body.map(codeGenerator).join("\n");
    // 针对`ExpressionStatement`我们会对节点的expression属性调用代码生成器，并加上一个分号……
    case "ExpressionStatement":
      return codeGenerator(node.expression) + ";";
    //针对CallExpression我们会打印出callee，也就是函数名，加上一个开括号，我们会对
    // arguments数组中的每一个节点调用代码生成器，使用逗号连接他们，然后我们添加一个闭括号
    case "CallExpression":
      return (
        codeGenerator(node.callee) +
        "(" +
        node.arguments.map(codeGenerator).join(", ") +
        ")"
      );
    case "Identifier":
      return node.name;
    case "NumberLiteral":
      return node.value;
    case "StringLiteral":
      return '"' + node.value + '"';
    default:
      throw new TypeError(node.type);
  }
}

// compiler
function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);
  return output;
}

// 这里我只是在导出函数……
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
