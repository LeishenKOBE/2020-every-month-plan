# 网络相关

1. 从输入 url 到页面呈现

```text
1. url输入回车
2. DNS解析(解析URL变成相应服务器的IP地址)
3. 浏览器网络向相应服务器发起TCP/IP连接请求（三次握手）
4. 建立TCP/IP连接
5. 浏览器网络发起HTTP请求
6. 等待响应过程
7. 下载HTML资源
8. 解析HTML
9. 遇到HTML里的资源，再次发起HTTP请求，下载资源（四次挥手）
10. 时间线
11. 呈现页面
```

2. 减少网络请求

```text
1. 雪碧图
2. base64编码图片
3. 合并脚本与样式表代码
4. 配置多个域名 CDN加速
5. 使用浏览器的缓存机制
```

### 继承

继承的核心有两点，一是构造函数继承属性，二是原型链继承方法

ES5 继承

> 构造函数、原型和实例的关系
> 每一个构造函数都有一个 prototype 属性，指向函数的原型对象；每一个原型都有一个 constructor 属性，指向构造函数；每一个实例都有一个**proto**属性，指向构造函数的 prototype

1. 原型链继承
   实现方法：重写原型对象，代之以一个新类型的实例

```js
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// 继承了SuperType，重写了subType的原型，让他等于SuperType的实例
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

let instance = new SubType();
console.log(instance);
```

关键代码：SubType.prototype = new SuperType()，通过这行代码实现了

A：重写了 SubType 的原型，使子类原型和子类断开了默认的链接（当然了，新的子类原型的 constructor 指向父类原型），子类原型是父类的实例，使得子类原型的<code>\_\_proto\_\_</code>指向父类原型。（因为实例的\_\_proto\_\_指向构造函数原型对象）

B: 通过子类原型的\_\_proto\_\_指向父类原型这条连接，子类可以沿着原型链访问到父类的 getSuperValue 的方法，子类继承了父类的方法

C: 因为子类原型是父类的实例，通过父类的构造函数，子类原型继承了父类的属性

存在的问题：

（1）包含引用类型值的原型：父类的实例属性变成了子类的原型属性(property)，原型属性会被子类的所有实例所共享。如果这个值是基本类型的话，没什么问题。但如果是引用类型，如果实例 1 修改了该属性，实例 2 的该属性的值也会发生改变，后来新创建的实例也会拿到最新的引用类型的值。

（2） 在创建子类实例的时候，不能像父类的构造函数传参。

2. 构造函数继承

```js
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "green", "blue"];
}
function SubType() {
  SuperType.call(this, "许嵩");
}
```

基本思想：在子类的构造函数里调用父类的构造函数，通过使用 call()或者 apply()的方法可以在将来新创建的对象上执行构造函数

核心思想：SuperType.call(this)

A: 在子类的构造函数里借调了父类的构造函数。在创建子类的实例的时候，会执行子类构造函数，包含了父类构造函数，这样一来新的实例在创建的时候就会执行父类构造函数中定义的所有对象初始化代码，因此每个子类实例都有自己引用类型值的副本了。

存在问题：
(1) 父类和子类之间并没有建立任何连接关系，因此子类实例是无法访问访问父类原型上的方法和属性
(2) 方法都在构造函数中定义，无法实现函数复用。

3. 组合式继承

```js
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

Subtype.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```

基本思路：
使用原型链实现了对原型属性和方法的继承，通过借用构造函数实现对属性的继承。这样既通过在原型上定义方法实现了函数复用，又能保证每个实例都有自己的属性

存在问题：父类的构造函数被调用了两次。分别在继承属性和继承原型进行了调用，会产生重复的值，一组在实例上，一组在原型上，会造成很大的浪费。

4. 原型式继承

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
var person = {
  name: "许嵩",
  friends: ["周杰伦", "戚薇", "胡夏"],
};

var anotherPerson = object(person);
console.log(anotherPerson);
```

基本思想：不是严格意义上的构造函数，新的实例以 person 对象作为原型，person 的属性就会被实例所共享。实际上，相当于创建了 person 的两个副本。实质上可以理解为复制。

存在的问题和原型链继承是一样的，会共享相同的值

5. 寄生式继承

```js
function createObject(original) {
  var clone = object(original);
  clone.syaHi = function () {
    console.log("Hi");
  };
  return clone;
}
```

6. 组合寄生式继承

```js
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

inheritPrototype(SubType, SuperType);
SuperType.prototype.sayAge = function () {
  console.log(this.age);
};
```

基本思想：通过构造函数来继承属性，通过原型链的混合形成来继承方法。本质上，就是使用寄生式继承来继承父类的原型，然后再将结果指定给子类型的原型

ES5 和 ES6 的继承机制是不一样的：
ES5 实质上是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质上是先创造父类的实例对象 this，然后再将子类的构造函数修改为 this


