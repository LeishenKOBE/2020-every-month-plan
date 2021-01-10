export default function nestTokens(tokens) {
  const nestedTokens = [];
  const sections = [];

  let collector = nestedTokens;

  for (let i = 0; i < tokens.length; i += 1) {
    let token = tokens[i];
    switch (token[0]) {
      case "#":
        collector.push(token);
        // 入栈
        sections.push(token);
        // 收集器要换人
        collector = token[2] = [];
        break;
      case "/":
        // 出栈
        let section = sections.pop();
        // 改变收集器(队尾是栈顶)
        collector = sections.length
          ? sections[sections.length - 1][2]
          : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
}
