// 函数柯里化
function add() {
  let _args = Array.prototype.slice.call(arguments);
  let _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  return _adder;
}

console.log(add(1, 2, 3) == 6);
console.log(add(1, 2, 3)(3));
