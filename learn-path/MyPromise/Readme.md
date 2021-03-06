# Promise

## Promise 规范

1. 存在三个状态：等待态：pending,执行态：fulfilled,失败态：rejected
2. 初始态为等待态，可以转换为执行态和失败态
3. 执行态不可转变为其他的状态，且必须有一个不可变的中值
4. 失败态不可转变为其他的状态，且必须有一个不可变的原因
5. 必须提供一个then方法，以供访问其当前值，终值及原因
6. then提供两个参数：onFulfilled和onRejected
7. onFulfilled和onRejected如果不是函数类型，必须忽略其
8. 如果executor执行报错，直接执行reject
9. 不同的promise可以相互嵌套
