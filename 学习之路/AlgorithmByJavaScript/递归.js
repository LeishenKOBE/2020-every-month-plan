// 阶乘
// function sqr(n) {
//   if (n === 1) return 1;
//   return sqr(n - 1) * n;
// }

// console.log(sqr(5));

// 斐波那契数列
// function feb(n) {
//   return n < 2 ? n : feb(n - 1) + feb(n - 2);
// }
// console.log(feb(6));

function Recursion(depth) {
  console.log("抱着");
  if (!depth) {
    console.log("我的小鲤鱼");
  } else {
    Recursion(--depth);
  }
  console.log("的我");
}
console.log("吓得我抱起了");
Recursion(3);
