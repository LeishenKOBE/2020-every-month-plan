// const sumTo = (n) => {
//   let i = 0;
//   let res = 0;
//   while (i++ < n) {
//     res += i;
//   }
//   console.log(res);
// };
// const sumTo2 = (n) => {
//   if (n < 0) {
//     return 0;
//   } else {
//     return sumTo2(n - 1) + n;
//   }
// };

// const factorial = (n) => {
//   if (n < 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// const fib = (n) => {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// };
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// const printList = (list) => {
//   let res = [];
//   let cur = list;
//   while (cur) {
//     res.push(cur.value);
//     cur = cur.next;
//   }
//   return res;
// };

// const printReverseList = (list) => {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value)
// };
// printReverseList(list)
// console.log();

function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log('Again:' + slow(1));
console.log(slow(2));
console.log('Again:' + slow(2));
