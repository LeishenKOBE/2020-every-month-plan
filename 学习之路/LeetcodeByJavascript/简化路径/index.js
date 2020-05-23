/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 21:57:55
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 22:01:36
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = []
    let paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        let p = paths[i]
        if (p === '..') {
            stack.pop()
        } else if (p && p !== '.') {
            stack.push(p)
        }
    }
    return '/' + stack.join('/')
};