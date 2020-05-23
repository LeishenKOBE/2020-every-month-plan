/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 22:38:22
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 22:47:03
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
