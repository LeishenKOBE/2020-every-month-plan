export default class Compiler {
  constructor(el, vue) {
    this.$el = document.querySelector(el);
    this.$vue = vue;
    if (this.$el) {
      let $fragment = this.node2Fragment(this.$el);
      this.compile($fragment);
    }
  }
  node2Fragment(el) {
    let fragment = document.createDocumentFragment();

    let child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  }

  compile(fragment) {
    let childNodes = fragment.childNodes;
    let self = this;

    childNodes.forEach((node) => {
      let text = node.textContent;
      if (node.nodeType == 1) {
        self.compileElement(node);
      } else if (node.nodeType == 3) {
        console.log(text);
      }
    });
  }

  compileElement(node) {
      console.log(node)
  }

  compileText(node) {}
}
