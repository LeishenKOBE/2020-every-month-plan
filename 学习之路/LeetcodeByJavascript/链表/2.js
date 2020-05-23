class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  toString() {
    return this.backwardString();
  }
  forwardString() {
    let cur = this.tail;
    let resultString = "";
    while (cur) {
      resultString += cur.data + " ";
      cur = cur.prev;
    }
    return resultString;
  }
  backwardString() {
    let cur = this.head;
    let resultString = "";
    while (cur) {
      resultString += cur.data + " ";
      cur = cur.next;
    }

    return resultString;
  }
  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    let node = new Node(data);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (position === 0) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else if (position === this.length) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        let cur = this.head;
        let index = 0;

        while (index++ < position) {
          cur = cur.next;
        }
        node.next = cur;
        node.prev = cur.prev;
        cur.prev.next = node;
        cur.prev = node;
      }
    }
    this.length += 1;
  }
  get(position) {
    if (position < 0 || position >= this.length) return false;
    let cur = this.head;
    let index = 0;

    while (index++ < position) {
      cur = cur.next;
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
  update(position, data) {
    if (position < 0 || position >= this.length) return false;
    let cur = this.head;
    let index = 0;
    while (index++ < position) {
      cur = cur.next;
    }
    cur.data = data;
    return true;
  }
  removeAt(position) {
    if (position < 0 || position >= this.length) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.prev.next = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let cur = this.head;
        let index = 0;
        while (index++ < position) {
          cur = cur.next;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
    }
    this.length -= 1;
    return cur.data;
  }
  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}

let list = new DoubleLinkedList();
list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.insert(0, 8);
console.log(list.size());
