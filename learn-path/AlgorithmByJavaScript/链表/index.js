class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    let node = new Node(val);
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }
  }
  find(val) {
    let cur = this.head;
    while (cur) {
      if (cur.val === val) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }
  delete(val) {
    
  }
}

let arr = ["1", "2", "3", "4", "5"];
let list = new LinkedList();
arr.forEach((item) => {
  list.insert(item);
});
console.log(list.find("23"));
