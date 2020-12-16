// reduce方法
// 求和
// const arr = [1, 2, 3, 4, 5];
// arr.reduce((all, cur, index, src) => {
//   console.log(all, cur, index);
//   return all + cur;
// });

// 为对象的时候求和
// const res = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].reduce(
//   (accumulator, current) => accumulator + current.x,
//   0
// );
// console.log(res);
// 将二维数组转换成一维
// const flattened = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ].reduce((accumulator, current) => accumulator.concat(current), []);
// console.log(flattened);

// 计算数组每个元素出现的次数
// let nameArr = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// const countName = nameArr.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// console.log(countName);

// 按属性对对象分类
// let people = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 20 },
//   { name: "Jane", age: 20 },
// ];

// function groupBy(objectArr, property) {
//   return objectArr.reduce((acc, obj) => {
//     let key = obj[property];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// let groupedPeople = groupBy(people, "age");
// console.log(groupedPeople);

// 使用扩展运算符合并对象数组中为数组的元素

// let friends = [
//   {
//     name: "Anna",
//     books: ["三国", "水浒", "西游记", "红楼梦"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["许嵩", "周杰伦", "石东昭", "陈佳玲"],
//     age: 21,
//   },
//   {
//     name: "Alice",
//     books: ["白夜行", "恶意", "解忧杂货店", "嫌疑人X的献身"],
//     age: 21,
//   },
// ];

// const arr = friends.reduce((acc, friend) => {
//   return [...acc, ...friend.books];
// }, []);

// console.log(arr);

// 数组去重

// let myArr = ["a", "b", "c", "d", "a", "b", "e", "a", "v"];

// const arr = myArr.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(arr);

// 按顺序运行Promise
// function p1(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 5);
//   });
// }
// function p2(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 2);
//   });
// }
// function p3(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 3);
//   });
// }
// function p4(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 4);
//   });
// }

// const promiseArr = [p1, p2, p3, p4];

// function runPromiseInSequence(arr, input) {
//   return arr.reduce(
//     (promiseChain, currentFunc) => promiseChain.then(currentFunc),
//     Promise.resolve(input)
//   );
// }
// runPromiseInSequence(promiseArr, 10).then((res) => {
//   console.log(res);
// });

// 功能型函数改造
// const double = (x) => x + x;
// const triple = (x) => x + x + x;
// const quadruple = (x) => x * 4;

// const pipe = (...functions) => (input) =>
//   functions.reduce((acc, fn) => fn(acc), input);

// const multiply = pipe(triple, triple);
// console.log(multiply(9));

// 使用reduce实现map


