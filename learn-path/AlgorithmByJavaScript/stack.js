function Stack(){
    this.items = [];
    this.push = function(element){
        this.items.push(element);
    }
    this.pop = function(){
        return this.items.pop();
    }
    this.peek = function(){
        return this.items[this.items.length - 1];
    }
    this.isEmpty = function(){
        return this.items.length === 0;
    }
    this.clear = function(){
        this.items = [];
    }
    this.size = function(){
        return this.items.length;
    }
    this.print = function(){
        console.log(this.items.toString());
    }
}

var s = new Stack();
console.log(s.isEmpty());