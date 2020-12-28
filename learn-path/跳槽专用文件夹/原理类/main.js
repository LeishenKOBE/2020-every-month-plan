// 原型链继承
// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };

// function SubType() {
//   this.subproperty = false;
// }

// // 继承了SuperType，重写了subType的原型，让他等于SuperType的实例
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// };

// let instance = new SubType();
// console.log(instance);
// 2. 构造函数继承
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "green", "blue"];
// }
// function SubType() {
//   SuperType.call(this, "许嵩");
// }

// 组合式继承
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "green", "blue"];
// }

// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }

// Subtype.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }
// var person = {
//   name: "许嵩",
//   friends: ["周杰伦", "戚薇", "胡夏"],
// };

// var anotherPerson = object(person);
// console.log(anotherPerson)

// function createObject(original) {
//   var clone = object(original);
//   clone.syaHi = function () {
//     console.log("Hi");
//   };
//   return clone;
// }

// 组合寄生式继承
function inheritPrototype(subType, SuperType) {
  let prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "green", "blue"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType,SuperType);
SuperType.prototype.sayAge = function () {
    console.log(this.age);
}