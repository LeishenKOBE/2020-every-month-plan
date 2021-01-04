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
  let cur = head;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  cur = head;
  let i = arr.length - 1;
  while (i > -1) {
    cur.val = arr[i];
    cur = cur.next;
    i--;
  }
  return head;
};
