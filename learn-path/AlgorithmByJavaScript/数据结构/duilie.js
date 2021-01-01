//队列的实现和栈差不多
//普通队列
//test
function Queue() {
    this.items = [];
    this.enqueue = function(element) {
        this.items.push(element);
    };
    //删除第一个元素
    this.dequeue = function() {
        return this.items.shift();
    };
    this.front = function() {
        return this.items[0];
    };
    this.isEmpty = function() {
        return this.items.length === 0;
    };
    this.size = function() {
        return this.items.length;
    };
    this.clear = function() {
        this.items = [];
    };
    this.print = function() {
        console.log(this.items.toString());
    };
}
//优先队列
function MinPriorityQueue() {
    this.items = [];
    this.enqueue = function(element, priority) {
        var queueElement = {
            element,
            priority
        };
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            var added = false;
            for (let i = 0; i < this.size(); i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(queueElement);
            }
        }
    };
    //删除第一个元素
    this.dequeue = function() {
        return this.items.shift();
    };
    this.front = function() {
        return this.items[0];
    };
    this.isEmpty = function() {
        return this.items.length === 0;
    };
    this.size = function() {
        return this.items.length;
    };
    this.clear = function() {
        this.items = [];
    };
    this.print = function() {
        console.log(this.items.toString());
    };
}