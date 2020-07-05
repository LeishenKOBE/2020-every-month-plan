/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2019-11-04 17:33:49
 * @LastEditors: 石东昭
 * @LastEditTime: 2019-11-04 18:40:48
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = i + 2; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    arr.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return arr
};

console.log(threeSum(a))