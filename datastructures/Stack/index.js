class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop(){
    if(!this.size) return;
    const temp = this.first;
    if(this.size === 1){
      [this.first, this.last] = [null, null]
    } else {
      this.first = temp.next
      temp.next  = null;
    }
 
    this.size--
    return temp.value
  }
}

const stack = new Stack();

