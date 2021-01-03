var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let i = 1;
  let sum = 1;
  let left = 0;
  let right = 1;

  while (i < n) {
    left = right;
    right = sum;
    sum = left + right;
    i++;
  }
  return sum;
};
console.log(climbStairs(3));
