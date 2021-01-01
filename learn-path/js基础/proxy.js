// Proxy
let obj = {
  name: "许嵩",
};

let proxy = new Proxy(obj, {
  get(target, key) {
    return target[key];
  },
  set(target, key, val) {
    target[key] = val;
  },
  has(target, key) {
    return key in target;
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      throw new Error("不存在的key");
    }
    return delete [target, key];
  },
  ownKeys(target) {
    return ["name"];
  },
});

console.log(Object.keys(proxy));
