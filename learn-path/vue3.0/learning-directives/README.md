# Vue指令学习

指令定义函数提供了几个钩子函数

1. bind 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作
2. inserted 被绑定元素插入父节点时调用
3. update 被绑定元素所在的模板更新时调用，而不论绑定值是否变化
4. componenUpdated 被绑定元素所在模板完成一次更新周期时调用
5. unbind 只调用一次，指令和元素解绑时调用