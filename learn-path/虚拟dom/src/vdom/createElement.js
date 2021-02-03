export default (tagName, opts) => {
  const vElement = Object.create(null);
  Object.assign(vElement, {
    tagName,
    props: opts.props || {},
    children: opts.children || [],
  });
  return vElement;
};
