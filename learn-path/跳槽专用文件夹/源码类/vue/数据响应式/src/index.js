import defineReactive from "./defineReactive";
import Observer from "./Observer";

let obj = {
  a: {
    m: {
      n: 5,
    },
  },
};

defineReactive(obj, "a", {});
console.log(obj.a);

function observe(val) {
  if (typeof val === "object") {
    return;
  }
  var ob;
  if (typeof val.__ob__ !== "undefined") {
    ob = val.__ob__;
  } else {
    ob = new Observer(val);
  }
  return ob;
}
