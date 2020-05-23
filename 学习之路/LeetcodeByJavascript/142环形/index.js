/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 23:10:15
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 23:11:11
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
            return head
        } else {
            res.push(head)
        }
        head = head.next
    }
    return null
};