class Stack {
  constructor() {
    this.items = [];
  }
  // 栈的操作
  // 压栈
  push(element) {
    this.items.push(element);
  }

  // 从栈中取出元素
  pop() {
    return this.items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 获取栈中元素的个数
  size() {
    return this.items.length;
  }
  // toString方法
  toString() {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  }
}

function dec2bin(number) {
  let stack = new Stack();
  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }
  let binNumber = "";
  while (!stack.isEmpty()) {
    binNumber += stack.pop();
  }
  return binNumber;
}

console.log(dec2bin(80));
