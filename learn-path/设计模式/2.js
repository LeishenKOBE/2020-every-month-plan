// 发布订阅模式，也叫观察者模式

var Event = {
  on(eventName, callback) {
    if (!this.handles) {
      Object.defineProperty(this, "handles", {
        value: {},
        enumerable: false,
        configurable: true,
        writable: true,
      });
    }
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
  },
  emit(eventName) {
    if (this.handles[arguments[0]]) {
      for (let i = 0; i < this.handles[arguments[0]].length; i += 1) {
          this.handles[arguments[0]][i](arguments[1])
      }
    }
  },
};
