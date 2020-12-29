<!--
 * @Author: shdongzhao
 * @Date: 2020-12-21 10:08:25
 * @LastEditors: shidongzhao
 * @LastEditTime: 2020-12-29 17:08:26
 * @Description:
-->

# 面向对象

## 对象属性

对象属性的数据类型包含 4 个

1. [[Configurable]]表示属性是否可以通过 delete 删除并重新定义，是否可以修改他的特性，以及是否可以把他改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true
2. [[Enumerable]] 表示属性是否可以通过 for-in 循环返回。默认是 true
3. [[Writable]] 表示属性的值是否可以被修改
4. [[Value]] 包含属性实际的值，默认是 undefined

要修改属性的默认特性，就必须用 Object.defineProperty()方法。这个方法接收 3 个参数：要给其添加属性的对象，属性的名称和一个描述符对象。最后一个参数,可以为 configurable,enumerable,writable 和 value

需要注意的是，一个属性被定义为不可配置之后，就不能变回可配置的了。

## 访问器属性

访问器属性有 4 个特性描述他们的行为

1. [[Configurable]]
2. [[Enumerable]]
3. [[Get]] 获取函数 默认值是 false
4. [[Set]] 设置函数 默认值是 false

访问器属性是不能直接定义的，必须使用 Object.defineProperty()

不能在两个对象间转移获取函数和设置函数

### 闭包

在 JS 中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理，内存也随之就会被回收，但是由于闭包是建立一个函数内部的子函数，由于其可访问上级作用域的原因，即使上级函数执行完，作用域也不会随之销毁，这时的子函数，也就是闭包，便拥有了访问上级作用域中变量的权限，即使上级函数执行完后作用域内部的值也不会销毁。

### Function 和 Object 的关系

我们知道一般对象是 Object 的实例，因为原型链的顶端都指向 Object.prototype。而 Object 本身也是函数，而任何函数都是 Function 的实例对象，比如 Array,String 等，由此可知，Object 也是 Function 的实例

```js
Object.__proto__ === Function.prototype;
Object.instanceof Function = true
```

同时，Function 也是个对象，他的原型是 Function.\_\_proto\_\_指向 Function.prototype，并且这个原型链向上继续指向 Object.prototype

于是就有了一个蛋鸡问题：

```js
Object instanceof Function === true;
Function instanceof Object === true;
```

我们知道 Object.prototype 是原型链的 root。但首先，现在世界上还没有 Object，更没有 Object.prototype。现在只有个特殊的对象，姑且称它为 root_prototype，里面定义了些基本的 field 和 method 比如 toString 之类的，以后我们要让所有的原型链都最终指向它。注意它没有原型，它的\_\_proto\_\_是 null，这也是它和所有其它 JavaScript 对象的区别，使它与众不同，能有资格成为原型链的 root。

然后定义 Function。先看 Function 的 prototype，我们只要知道这是一个特殊的对象，它的原型\_\_proto\_\_指向刚才的 root_prototype，就是说 Function.prototype.\_\_proto\_\_ === root_prototype，这样它就算连上了原型链的 root。

上面已经讲过了，Function 也是个对象，也有\_\_proto\_\_，指向 Function 自己的 prototype，所以说白了 Function 也是个奇葩，是 JavaScript 里规定的一个特殊的东西。而 Function.prototype 的原型\_\_proto\_\_继续指向 root_prototype，所以 Function 也连上了原型链 root。

所有的函数，什么 Array 之类的，包括 Object 也是函数，都是继承 Function 的，就是说，任意函数 foo.\_\_proto\_\_ === Function.prototype，所以我们自然有 Object instanceof Function。

然后再看 Object，它本来就是个函数而已，和其它函数没什么区别，都继承了 Function。可是现在最关键的一步是，强行设定让 Object.prototype = root_prototype，这样 Object.prototype 就成了原型链的 root！注意这里的逻辑，是先有了 root_prototype，然后规定 Object.prototype 等于它，这一步是人为规定的，这就是 Object 的特殊之处。你要是规定 bar.prototype 也等于 root_prototype，那 bar.prototype 也成了原型链的的顶端。所以 JavaScript 里\_\_proto\_\_这个东西其实是很随意的，放在哪个函数的 prototype 里，哪个函数就成了你爹。

好了现在 Object.prototype === root_prototype 了，成了所有对象原型链的 root。那么由第 3 步的结论，Function 也是对象，是连上了 root_prototype 的，而现在 root_prototype 给 Object.prototype 了，那 Function 自然就是 instanceof Object。

总结一下：

```text
- 首先没有鸡没有蛋，现有一个特殊对象 root_prototype，它是上帝
- 接下来应该是先有Function，并且定义它的prototype和__proto__，都连上了root_prototype
- 然后才有了Object，它是Function的instance，继承了Function，这时候Object还只是普通函数
- 然后规定Object.prototype = root_prototype，这时候Object才显得特殊，成为了原型链的顶端，否则它和其他函数没有任何区别
- 于是所有东西，包括Function，都成了Object的实例了
```
