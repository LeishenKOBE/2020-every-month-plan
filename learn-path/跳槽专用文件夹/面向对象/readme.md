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
