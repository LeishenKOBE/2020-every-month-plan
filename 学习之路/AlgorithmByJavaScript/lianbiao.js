//单链表
function SinglyLinkedList() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;
  this.append = function(element) {
    var node = new Node(element);
    var currentNode = head;
    if (head === null) {
      head = node;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
  this.insert = function(position, element) {
    if (position < 0 || position > length) {
      return false;
    } else {
      var node = new Node(element);
      var index = 0;
      var currentNode = head;
      var previousNode;
      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = currentNode;
          currentNode.prev = node;
          head = node;
        }
      } else {
        while (index < position) {
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = node;
        currentNode.prev = node;
      }
      length++;
      return true;
    }
  };
  this.removeAt = function(position) {
    if ((position < 0 && position >= length) || length === 0) {
        return false;
    }else{
        var currentNode = head;
        var index = 0;
        var previousNode;
        if(position === 0){
            if(length === 1){
                head = null;
                tail = null;
            }else{
                head = currentNode.next;
                head.prev = null;
            }
        }else if(position === length - 1){
            if(length === 1){
                head = null;
                tail = null;
            }else{
                currentNode = tail;
                tail = currentNode;
                tail.next = null;
            }
        }else{
            while(index < position){
                index++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            previousNode = currentNode.next.prev;
        }
        length--;
        return true;
    }
  };
  this.remove = function(element){
    var index = this.indexOf(element);
    return this.removeAt(index);
  }
  this.indexOf = function(element){
      var currentNode = head;
      var index = 0;
      while(currentNode){
          if(currentNode.element === element){
              return index;
          }

          index++;
          currentNode = currentNode.next;
      }

      return -1;
  }
  this.isEmpty = function(){
      return length ==0;
  }
  this.size = function(){
      return length;
  };
  this.getHead = function(){
      return head.element;
  }
  this.toString = function(){
      var currentNode = head;
      var string = '';
      while(currentNode){
          string += ','+currentNode.element;
          currentNode = currentNode.next;
      }
      return string.slice(1);
  }
  this.print = function(){
      console.log(this.toString())
  }
  this.list = function(){
      console.log('head: ',head);
      return head;
  }
}
