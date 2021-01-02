// 柯里化

function currying(func, args) {
  // 形参个数
  let arity = func.length;
  // 上一次传入的参数
  args = args || [];
  return function () {
    // 将参数转换为数组
    var _args = [].slice.call(arguments);
    // 将上次的参数与当前参数进行组合并修正传参顺序
    Array.prototype.unshift.apply(_args, args);

    // 如果参数不够，返回闭包函数继续收集参数
    if (_args.length < arity) {
      return currying.call(null, func, _args);
    }
    // 参数够了则直接执行被转换的函数
    return func.apply(null, _args);
  };
}

function currying6(func, args = []) {
  let arity = func.length;
  return function (..._args) {
    _args.unshift(...args);
    if (_args.length < arity) {
      return currying6.call(null, func, _args);
    }
    return func(..._args);
  };
}
