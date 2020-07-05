class Set {
  constructor() {
    this.item = {};
  }
  // 添加方法
  add(val) {
    if (this.has(val)) {
    }
    this.item[val] = val;
    return true;
  }
  // 移除
  remove(value) {
    if (this.has(value)) {
      delete this.item[value];
    }
  }
  has(val) {
    return this.item.hasOwnProperty(val);
  }
  // 清除集合内元素
  clear() {
    this.item = {};
  }
  size() {
    return Object.keys(this.item).length;
  }
  values() {
    return Object.keys(this.item);
  }
}
