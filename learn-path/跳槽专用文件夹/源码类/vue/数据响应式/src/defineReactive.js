export default function defineReactive(data, key, val) {
  if (arguments.length === 2) {
    val = obj[key];
  }
  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可配置的
    configurable: true,
    get() {
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
    },
  });
}
