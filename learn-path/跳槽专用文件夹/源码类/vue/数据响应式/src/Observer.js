import { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMethods } from "./array";
import { observe } from "./observe";
import Dep from "./Dep";

export default class Observer {
  constructor(value) {
    this.dep = new Dep();
    def(value, "__ob__", this, false);
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(value) {
    for (let key in value) {
      defineReactive(value, key);
    }
  }
  observeArray(value) {
    for (let i = 0, l = value.length; i < l; i++) {
      observe(value[i]);
    }
  }
}
