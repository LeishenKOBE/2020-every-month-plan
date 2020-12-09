let arr = [],
  set = new Set(),
  n = 1000000;
for (let i = 0; i < n; i += 1) {
  arr.push(i);
  set.add(i);
}
let result;
console.time("Arr");
result = arr.indexOf(123123) !== -1;
console.timeEnd("Arr");
console.time("Set");
result = set.has(123123);
console.timeEnd("Set");
