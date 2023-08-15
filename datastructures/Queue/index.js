const EventEmitter = require("events");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push at the end
  queue(val) {
    const newNode = new Node(val);
    if (!this.size) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // pop at the beginning
  dequeue() {
    if (!this.size) return;
    const popped = this.first;
    if (this.size === 1) {
      [this.last, this.first] = [null, null];
    } else {
      this.first = this.first.next;
    }

    this.size--
    return popped.value;
  }

}

const queue = new Queue();

queue.push('one')
queue.push('two')
queue.push('three')
queue.push('four')

const ch = new EventEmitter('change')
ch.emit
