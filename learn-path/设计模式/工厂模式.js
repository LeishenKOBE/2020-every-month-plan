// 工厂模式

// 工厂模式中,我们不会向客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new 操作的一种模式

class Creator {
  create(name) {
    return new Animal(name);
  }
}
class Animal {
  constructor(name) {
    this.name = name;
  }
}

let creator = new Creator();
let duck = creator.create("Duck");
console.log(duck.name);

let chicken = creator.create("Chicken");
console.log(chicken.name);
