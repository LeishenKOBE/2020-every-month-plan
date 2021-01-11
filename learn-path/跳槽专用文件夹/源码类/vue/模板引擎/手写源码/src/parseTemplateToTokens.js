import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

const parseTemplateToTokens = (templateStr) => {
  let tokens = [];
  let scanner = new Scanner(templateStr);
  let word = "";
  while (scanner.pos != templateStr.length) {
    word = scanner.scanUntil("{{");
    if (word !== "") {
      tokens.push(["text", word]);
    }
    scanner.scan("{{");
    word = scanner.scanUntil("}}");
    if (word !== "") {
      if (word[0] == "#") {
        tokens.push(["#", word.substring(1)]);
      } else if (word[0] === "/") {
        tokens.push(["/", word.substring(1)]);
      } else {
        tokens.push(["name", word]);
      }
    }
    scanner.scan("}}");
  }
  return nestTokens(tokens);
};
export default parseTemplateToTokens;
