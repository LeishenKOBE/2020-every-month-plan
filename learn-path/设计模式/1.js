class Subject {
  constructor() {
    this.observer = [];
  }
  addObserver(observer) {
    this.observer.push(observer);
  }
  cancelObserver(observer) {
    this.observer = this.observer.filter((item) => item !== observer);
  }
  notify() {
    this.observer.forEach((i) => i.update());
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`my name updating ${this.name}`);
  }
}

let test = new Subject();
let person1 = new Observer("person: 许嵩");
let person2 = new Observer("person: 石东昭");

test.addObserver(person1);
test.addObserver(person2);
test.notify();
