/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== i) {
      return i;
    }
  }
  return nums.length;
};
