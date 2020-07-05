class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
  toString() {
    let cur = this.head;
    let listString = "";

    while (cur) {
      listString += cur.data + " ";
      cur = cur.next;
    }
    return listString;
  }
  insert(position, data) {
    if (position < 0 || position > this.items.length) {
      return false;
    }
    let node = new Node(data);

    // 判断插入的位置是否是第一个
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let cur = this.head;
      let prev = null;
      while (index++ < position) {
        prev = cur;
        cur = cur.next;
      }
      node.next = cur;
      prev.next = node;
    }
    this.length += 1;
    return true;
  }
  get(position) {
    if (position < 0 || position >= this.items.length) {
      return null;
    }
    let cur = this.head;
    let index = 0;
    while (index < position) {
      cur = cur.next;
      index++;
    }
    return cur.data;
  }
  indexOf(data) {
    let cur = this.head;
    let index = 0;
    while (cur) {
      if (cur.data === data) {
        return index;
      }
      cur = cur.next;
      index++;
    }
    return -1;
  }
  update(position, newData) {
    if (position < 0 || position >= this.items.length) {
      return false;
    }
    let cur = this.head;
    let index = 0;
    while (index++ < position) {
      cur = cur.next;
      index++;
    }
    cur.data = newData;
    return true;
  }
  removeAt(position) {
    if (position < 0 || position >= this.items.length) {
      return false;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let prev = null;
      let cur = this.head;
      while (index++ < position) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = cur.next;
    }
    this.length--;
  }
  remove(data) {
    var position = this.indexOf(data);
    this.removeAt(position);
  }
}
