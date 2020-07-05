/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 23:02:56
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 23:05:42
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let res = []
    while (head !== null) {
        if (res.includes(head)) {
            return true
        } else {
            res.push(head)
        }
        head = head.next
    }
    return false
};