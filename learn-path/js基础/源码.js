//  prototype 原型
// __proto__ 原型链

// 从属关系
// prototype是函数的属性：普通对象
// __proto__->对象Object的属性，也是一个普通对象
// 对象的__proto__保存着该对象的构造函数的prototype

// Function和Object 既是函数也是对象

// new方法
// new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

function bNew(Target, ...args) {
  let thisValue = Object.create(Target.prototype);
  let result = Target.apply(thisValue, args);
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return thisValue;
}

// apply
// apply() 方法调用一个具有给定this值的函数，以及以一个数组的的形式提供的函数
Function.prototype.myApply = function (context, params = []) {
  if (typeof this !== "function") {
    throw new Error("hope call");
  }

  context = context || window;
  let fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...params);
  delete context[fn];
  return res;
};

Function.prototype.myCall = function (context, ...params) {
  if (typeof this !== "function") {
    throw new Error("hope function");
  }
  context = context || window;
  const fn = Symbol("fn");
  context[fn] = this;
  const res = context[fn](...params);
  delete context[fn];
  return res;
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("hope function");
  }
  context = context || window;
  return (args2) => {
    this.call(this, ...args, ...args2);
  };
};

function myInstance(L, R) {
  let l = L.__proto__;
  let r = R.prototype;
  while (l !== null) {
    if (l === r) {
      return true;
    }
    l = l.__proto__;
  }
  return false;
}

Object.prototype.myCreate = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

const myNew = function (context, ...params) {
  let obj = Object.create(context.prototype);
  let res = context.call(obj, ...params);
  return typeof res === "object" ? res : obj;
};

// 防抖  防抖是在第一次触发事件时，不立即执行函数，而是给出一个期限值，然后，如果这个期限内没有触发事件就立即执行，如果触发了就重新计时
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function throttle(fn, delay = 500) {
  let run = true;
  return function () {
    if (!run) {
      return;
    }
    run = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      run = true;
    }, delay);
  };
}
