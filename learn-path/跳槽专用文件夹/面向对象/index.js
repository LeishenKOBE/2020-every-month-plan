Function.prototype.selfCall = function () {
  const args = arguments;

  if (Object.prototype.toString.call(this) !== '[object Function]') {
    throw new Error('必须使用函数调用该方法');
  }
  let;
};
