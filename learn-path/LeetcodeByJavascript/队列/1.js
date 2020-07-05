class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    var queueElement = new QueueElement(element, priority);
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      for (let i = 0; i < this.items.length; i += 1) {
        if (queueElement.priority < this.items[i]) {
          this.items.splice(i, 0, queueElement);
          i = this.items.length
        }
      }
    }
  }
}
