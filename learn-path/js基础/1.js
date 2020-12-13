let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((item, key) => {
  arr[key] += 1;
});
console.log(arr);
