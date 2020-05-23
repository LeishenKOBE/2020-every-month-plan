class Queue {
  constructor() {
    this.items = [];
  }
  // 添加操作
  enqueue(element) {
    this.items.push(element);
  }
  // dequeue 删除第一个
  dequeue() {
    return this.items.shift();
  }
  //   front取出第一个
  front() {
    return this.items[0];
  }
  //isEmpty
  isEmpty() {
    return this.items.length === 0;
  }
  // size
  size() {
    return this.items.length;
  }
  toString() {
    let resultString = "";
    for (let i = 0; i < this.items.length; i += 1) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  }
}

function passGame(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i += 1) {
    queue.enqueue(nameList[i]);
  }

  while (queue.size > 1) {
    for (let i = 0; i < num - 1; i += 1) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return nameList.indexOf(queue.front());
}
console.log(passGame([1, 2, 3, 4, 5, 7, 8, 9, 7], 23));
