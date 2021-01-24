import Observer from "./Observer";
export const observe = function observe(val) {
  if (typeof val !== "object") {
    return;
  }
  var ob;
  if (typeof val.__ob__ !== "undefined") {
    ob = val.__ob__;
  } else {
    ob = new Observer(val);
  }
  return ob;
};
