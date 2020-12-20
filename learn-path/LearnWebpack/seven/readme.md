# Webpack 的 plugin 和 loader

在 Webpack 中，专注于处理 Webpack 在编译过程中的某个特定的任务的功能模块，可以称为插件。它与 loader 有以下区别:

1. loader 是一个转换器，将 A 文件进行编译成 B 文件，比如：将 A.less 转换为 A.css，单纯的文件转换过程。Webpack 自身只支持 js 和 json 这两种格式的文件，对于其他文件需要通过 loader 将其转换为 commonjs 规范的文件后，webpack 才能够解析
2. plugin 是一个扩展器，它丰富了 Webpack 本身，针对是 loader 结束后，Webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。

### plugin 的特征

- 是一个独立的模块
- 模块对外暴露一个 js 函数
- 函数的原型(prototype)上定义了一个注入 compiler 对象的 apply 方法
- apply 函数中需要通过 compiler 对象挂载的 Webpack 事件钩子，钩子的回调中能拿到当前编译的 compilation 对象，如果是异步编译插件的话可以拿到回调 callback
- 完成自定义子编译流程并处理 complition 对象的内部数据
- 如果异步编译插件的话，数据处理完成后执行 callback 回调

1. webpack 读取配置的过程中会先执行 new HelloPlugin(options)初始化一个 HelloPlugin 获取其实例
2. 初始化 compiler 对象后调用 HelloPlugin.apply(compiler)给插件实例传入 compiler 对象
3. 插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称,回调函数)监听到 Webpack 广播出来的事件。并且可以通过 compiler 对象操作 webpack

## 事件流机制

webpack 本质上是一种事件流机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable

Webpack 的 Tapable 事件流机制保证了插件的有序性，将各个插件串联起来，webpack 在运行过程中会广播事件，插件只需要监听他所关心的事件，就能加入到这条 webpack 机制中，去改变 webpack 的运作，使得整个系统扩展性良好

Tapable 也是一个小型的 labrary，是 webpack 的一个核心工具。类似于 node 的 events 库，核心原理是一个发布订阅模式，作用是提供类似的插件接口。方法如下：

```js
// 广播事件
compiler.apply("event-name", params);
compilation.apply("event-name", params);
// 监听事件
compiler.plugin("event-name", function (params) {});
compilation.plugin("event-name", function (params) {});
```

一个 webpack 插件由以下组成：

1. 一个 Javascript 命名函数
2. 在插件函数的 prototype 上定义一个 apply 方法
3. 指定一个绑定到 webpack 自身的事件钩子
4. 处理 webpack 内部实例的特定数据
5. 功能完成后调用 webpack 提供的回调
