const render = (vNode) => {
  if (typeof vNode === "string") return document.createTextNode(vNode);
  const $el = document.createElement(vNode.tagName);
  for (const [key, value] of Object.entries(vNode.props)) {
    $el.setAttribute(key, value);
  }
  for (let child of vNode.children) {
    $el.appendChild(render(child));
  }
  return $el;
};

export default render;
