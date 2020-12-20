// 发布订阅模式
// 发布订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于他的对象都将得到状态改变的通知
// 订阅者把自己想订阅的事件注册到调度中心，当发布者发布该事件到调度中心，也就是该事件触发时，由调度中心统一调度订阅者注册到调度中心的处理代码

// 实现思路
// 1. 创建一个对象
// 2. 在改对象上创建一个缓存列表
// 3. on方法把函数fn都加载到缓存列表中
// 4. emit方法取到arguments里第一个当做event，根据event值去执行对应缓存列表中的函数
// 5. off方法可以根据event值取消订阅
// 6. once方法只监听一次，调用完毕后删除缓存函数

// class Publisher {
//   constructor() {
//     this._subMap = {};
//   }
//   subscribe(type, cb) {
//     if (this._subMap[type]) {
//       if (!this._subMap[type].includes(cb)) {
//         this._subMap[type].push(cb);
//       }
//     } else {
//       this._subMap[type] = [cb];
//     }
//   }
//   unsubscribe(type, cb) {
//     if (this._subMap[type] && this._subMap[type].includes(cb)) {
//       const index = this._subMap[type].indexOf(cb);
//       this._subMap[type].splice(index, 1);
//     }
//   }
//   notify(type, args) {
//     if (this._subMap[type]) {
//       this._subMap[type].forEach((cb) => cb(args));
//     }
//   }
// }

// const pub = new Publisher();

// // 订阅
// pub.subscribe(
//   "公众号1",
//   (fn1 = (msg) => console.log(`孙悟空订阅的公众号1: ${msg}`))
// );
// pub.subscribe(
//   "公众号1",
//   (fn2 = (msg) => console.log(`猪八戒订阅的公众号1: ${msg}`))
// );
// pub.subscribe(
//   "公众号2",
//   (fn3 = (msg) => console.log(`沙悟净订阅的公众号2: ${msg}`))
// );

// // 发布
// pub.notify("公众号1", "今天我们的粉丝查过100万啦！！！");
// pub.notify("公众号2", "明天给粉丝们寄礼物喽～～");

class EventBus {
  constructor() {
    this.subMap = {};
  }
  $on(name, cb) {
    if (this.subMap[name]) {
      if (!this.subMap[name].includes(cb)) {
        this.subMap[name].push(cb);
      }
    } else {
      this.subMap[name] = [cb];
    }
  }
  $emit(name, args) {
    if (this.subMap[name]) {
      this.subMap[name].forEach((cb) => cb(args));
    }
  }
}
const eventBus = new EventBus();
eventBus.$on("sayHello", (arg) => console.log(`this is sayHello: ${arg}`));
eventBus.$on("goodBye", (arg) => console.log(`this is goodBye: ${arg}`));

eventBus.$emit("sayHello", "mike");
eventBus.$emit("goodBye", "mike");

// 发布订阅模式的优点：
// 1. 时间上的解耦
// 2. 对象上的解耦
// 缺点:
// 1. 增加消耗，即使订阅后没有触发，订阅者始终存在内存中
// 2. 增加复杂度：订阅者被缓存在一起