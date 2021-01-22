import Compiler from "./Compiler";

export default class Vue {
  constructor(options) {
    this.$options = options || {};
    this._data = options.data || undefined;
    new Compiler(options.el, this);
  }
}
