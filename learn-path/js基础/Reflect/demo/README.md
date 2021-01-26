# js-webpack-simple

极其简单的webpack的js开发环境

Reflect方法:

1. Reflect.apply(target,thisArgument,argumentList) 对一个参数进行调用，同时可以传入一个数组作为参数
2. Reflect.construct(target,argumentList) 对构造函数进行new操作
3. Reflect.defineProperty(target,propertyKey,attributes) 和Object.defineProperty()类似
4. Reflect.deleteProperty(target,propertyKey)  删除对象中的元素
5. Reflect.get(target,propertyKey) 获取对象身上某个属性的值
6. Reflect.getOwnPropertyDescriptor(target,propertyKey)
7. Reflect.getPropertyOf(target)  获取对象原型
8. Reflect.has(target, propertyKey)  判断一个对象是否存在某个属性
9. Reflect.isExtensible(target)   是否可扩展
10. Reflect.ownKeys  获取对象的键值
11. Reflect.preventExtensions(target)   将要变得不可扩展的对象
12. Reflect.set(target, propertyKey, value[, receiver])  将值分配给属性的函数
13. Reflect.setPrototypeOf(target, prototype)  设置对象原型的函数
