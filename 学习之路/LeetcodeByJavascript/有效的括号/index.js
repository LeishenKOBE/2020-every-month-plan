/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2019-11-01 18:32:40
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 21:55:59
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let obj = { "(": ")", "[": "]", "{": "}" }
    for (let i = 0; i < s.length; i++) {
        const ele = s[i]
        //括号匹配
        if (ele in obj) {
            stack.push(ele)
        } else {
            if (ele != obj[stack.pop()]) {
                return false
            }
        }
    }
    // 判断对战是否为空
    return !stack.length
};