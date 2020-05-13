# Map的应用

## 什么时候使用Map替换Object

- Object的key无法支持该数据时
- 需要了解对象大小时
- 不想存在冲突的key值时
- 自定义key值时
Map可以接受任意类型的键值
对象也可以作为键值

Map和WeakMap之间最主要的区别是，Weakmap允许对键对象进行垃圾回收，从而防止内存泄漏。WeakMap只能接受对象作为键值。

遍历对象的键值时输出顺序未必与定义的顺序一致。Map对象遍历没有这个问题。

map是可迭代的，必须使用其他的辅助静态函数，如Object.keys()或Object.entries()
