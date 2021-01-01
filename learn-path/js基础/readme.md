# JS 那些知识

### new 操作符

当一个函数被使用 new 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 this
2. 函数体执行，通常它会修改 this，为其添加新的属性
3. 返回 this 的值

### 可选链

如果可选链 ?. 前面的部分是 undefined 或者 null，它会停止运算并返回该部分

```javascript
let user = {}; // user 没有 address 属性

alert(user?.address?.street); // undefined（不报错）
```

可选链 ?. 语法有三种形式：

> obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
> obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
> obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined

### 函数底层的工作原理

有关正在运行的函数的执行过程的相关信息被存储在其执行上下文中

执行上下文是一个内部的数据结构，它包含有关函数执行时的详细细节：当前控制流所在的位置，当前的变量，this 的值，以及其他的一些内部细节

一个函数仅具有一个与其相关联的执行上下文

当一个函数进行嵌套调用时，将会发生以下的事：

1. 当前函数被暂停
2. 与它相关联的执行上下文被一个叫做执行上下文堆栈的特殊数据结构保存起来。
3. 执行嵌套调用
4. 嵌套调用结束后，从堆栈中恢复之前的执行上下文，并从停止的位置恢复外部函数。

<h3><b>任何递归都可以用循环来重写。通常循环变体更有效。</b></h3>

### 词法环境

1. 变量<br />
   在 JavaScript 中，每个运行的函数，代码块以及整个脚本，都有一个被称为词法环境的内部（隐藏）的关联对象 <br />
   语法环境对象由两部分组成：

   (1) 环境记录---一个存储所有局部变量作为其属性的对象

   (2) 对外部语法环境的引用，与外部代码相关联

   一个变量只是环境记录这个内部对象的一个属性。获取或者修改意味着获取或者修改词法环境的一个变量

2. 函数声明

   一个函数也是一个值。函数声明的初始化会被立即完成。
   正常来说，这种行为只适用于函数声明，而不适用于函数分配给变量的表达式

3.内部和外部的词法环境

在一个函数运行时，在调用刚开始时，会创建一个新的词法环境以存储这个调用的局部变量和参数。

当代码要访问一个变量的时候----首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。

4. 返回函数

```js
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
```

不同的是，在执行 makeCounter()的过程中创建了一个仅占一行的嵌套函数：return count++。
所有的函数在“诞生”时都会记住创建它们的词法环境。所有函数都有名为[[Environment]]的隐藏属性，该属性保存了对创建该函数的词法环境的引用

因此，counter.[[Environment]]有对{count:0}词法环境的引用。这就是函数记住它创建于何处的方式，与函数在哪被调用无关。[[Environment]]引用在函数创建时不设置并永久保存。

稍后，当调用 counter()时，会为该调用创建一个新的词法环境，并且其外部词法环境引用获取于 counter.[[Environment]]

现在，当 counter()中的代码查找 count 变量时，它首先搜索自己的词法环境（为空，因为没有局部变量），然后是外部 makeCounter 的词法环境，并且在哪里找到就在哪里修改。

<h2>在变量所在的词法环境中更新变量</h2>

### 闭包

闭包是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在 js 中，所有函数都是闭包的。

也就是说，JavaScript 中的函数会通过自动隐藏的<code>[[Environment]]</code>属性记住他们创建的位置，所以他们可以访问外部变量

在面试中，前端开发者会被问到什么是闭包，正确的回答是闭包的含义，并解释清楚为什么 JavaScript 中的所有的函数都是闭包的，以及可能的关于<code>[[Environment]]</code>属性和词法环境的原理的技术细节。

### 垃圾收集

通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除，因为现在没有任何对他们的引用了。与 JavaScript 中的任何其他对象一样，词法环境仅在可达时才会被保留在内存中。

但是，如果有一个嵌套的函数在函数结束后仍可达，则它将具有引用词法环境的<code>[[Environment]]</code>属性。

闭包在 V8 引擎中一个重要的副作用是，此类变量在调试中不可用

```javascript
function f() {
  let value = Math.random();

  function g() {
    debugger; // 在 Console 中：输入 alert(value); No such variable!
  }

  return g;
}

let g = f();
g();
```

### 装饰器

装饰器是一个特殊的函数，他接受另一个函数并改变它的行为。它接收另一个函数并改变它的行为。

其思想是，我们可以为任何函数调用该函数，它将返回缓存包装器。

### 箭头函数

1. 没有 this
2. 没有 arguments
3. 不能使用 new 进行调用
4. 他们也没有 super

### 属性标志和属性描述符

### 原型继承

`[[Prototype]]`</code>`

原型继承有两个限制：

1. 引用不能形成闭环。如果我们试图在一个闭环中分配**proto**，JavaScript 会抛出错误。
2. **proto**的值可以是对象，也可以是 null。其他类型的值会被忽略

当然，这可能很显而易见，但是仍然要强调：只能有一个 [[Prototype]]。一个对象不能从其他两个对象获得继承。

for in 循环也会迭代继承的属性

hasOwnProperty 也是继承而来为什么没有被 for in 循环出来

答案很简单：它是不可枚举的。就像 Object.prototype 的其他属性，hasOwnProperty 有 enumerable:false 标志。并且 for..in 只会列出可枚举的属性。这就是为什么它和其余的 Object.prototype 属性都未被列出。

### F.prototype

如果 F.prototype 是一个对象，那么 new 操作符会使用它为新对象设置[[Prototype]].

注意，这里的 F.prototype 指的是 F 的一个名为 prototype 的属性。

每个函数都有"prototype"属性，即使我们没有提供给他。

默认的 prototype 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身.

1. F.prototype 属性（不要把它与[[Prototype]]弄混了）在 new F 被调用的时候为新对象的[[Prototype]]赋值。
2. F.prototype 的值要么是一个对象，要么就是 null：其他值都不起作用。
3. "prototype" 属性仅在设置了一个构造函数（constructor function），并通过 new 调用时，才具有这种特殊的影响。

### 原生的原型

所有的内建对象都遵循相同的模式(pattern)：

1. 方法都存储在 prototype 中(Array.prototype,Object.prototype,Date.prototype)
   对象本身只存储数据

原始数据类型也将方法存储在包装器对象的 prototype 中，Number.prototype，String.prototype 和 Boolean.prototype。只有 undefined 和 null 没有包装器对象

内建原型可以被修改或者被新的方法填充。

### Class

类构造器与函数构造器的不同

1. 首先，通过 class 创建的函数具有特殊的内部属性标记[[FunctionKind]]: "classConstructor"。因此，它与手动创建并不完全相同。与普通函数不同，class 必须使用 new 来调用它。

2. 类方法是不可枚举的。类定义"prototype"中所有方法的 enumerable 标志设置为 false
3. 类总是使用 use strict。在类构造中的所有代码都将自动进入严格模式。

计算属性名称

```js
class User {
  ["say" + "Hi"]() {
    alert("Hello");
  }
}

new User().sayHi();
```

### Object 方法

1. Object.create 创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`
