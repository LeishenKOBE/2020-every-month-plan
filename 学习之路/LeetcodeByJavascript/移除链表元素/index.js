/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-23 22:47:42
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-23 22:57:03
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let newHead = new ListNode(null),
        prev = newHead,
        curr = head;
    newHead.next = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = prev.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }

    return newHead.next;
};