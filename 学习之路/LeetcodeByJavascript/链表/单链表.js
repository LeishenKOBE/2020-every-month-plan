class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element) {
    let node = new Node(element);
    let cur;
    // 追加有两种情况，空和非空
    if (!this.head) {
      this.head = node;
    } else {
      // 遍历链表
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
  print() {
    let cur = this.head;
    let result = [];
    while (cur) {
      result.push(cur.element);
      cur = cur.next;
    }
    console.log(result.join("===>"));
    return result.join("===>");
  }
  removeAt(position, element) {
    let cur = this.head;
    let prev;
    let i = 0;
    if (position === 0) {
      this.head = cur.next;
    } else {
      while (i < position) {
        prev = cur;
        cur = cur.next;
        i += 1;
      }
      prev.next = cur.next;
      cur.next = null;
    }
    this.length -= 1;
    return cur.element;
  }
}

let list = new LinkNodeList();
list.append("Hello");
list.append("Hello");
list.append("Hello");
list.append("Hello");
list.print();
