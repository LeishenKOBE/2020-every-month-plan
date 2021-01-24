// ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
import { def } from "./utils";
const arrayPrototype = Array.prototype;

export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

methodsNeedChange.forEach((methodName) => {
  const original = arrayPrototype[methodName];

  def(
    arrayMethods,
    methodName,
    function () {
      const ob = this.__ob__;
      let inserted = [];
      switch (methodName) {
        case "push":
        case "unshift":
          inserted = arguments;
          break;
        case "splice":
          inserted = [].slice.call(arguments);
          break;
        default:
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      console.log("lalala");
      const result = original.apply(this, arguments);
      return result;
    },
    false
  );
});
