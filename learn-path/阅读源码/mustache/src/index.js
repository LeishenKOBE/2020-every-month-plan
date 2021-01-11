import parseTemplateToTokens from './parseTemplateToTokens';

window.SSG_TemplateEngine = {
  render(templateStr, data) {
    let tokens = parseTemplateToTokens(templateStr);
    console.log(tokens);
  },
};
