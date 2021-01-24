import { observe } from "./observe";
import Dep from "./Dep";

export default function defineReactive(data, key, val) {
  const dep = new Dep();
  if (arguments.length === 2) {
    val = data[key];
  }

  let childOb = observe(val);

  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可配置的
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend();
        if(childOb) {
          childOb.dep.depend()
        }
      }
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      console.log(newVal);
      val = newVal;
      childOb = observe(newVal);
      dep.notify();
    },
  });
}
