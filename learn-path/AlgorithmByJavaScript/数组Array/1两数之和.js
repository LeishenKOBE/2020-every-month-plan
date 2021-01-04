/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i += 1) {
    const num = target - nums[i];
    if (obj[num] >= 0) {
      return [i, obj[num]];
    } else {
      obj[nums[i]] = i;
    }
  }
  return [];
};
