class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    let currentTail = this.head;
    let pre;

    while (currentTail.next) {
      pre = currentTail;
      currentTail = currentTail.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      [this.head, this.tail] = [null, null];
      this.length = 0;
    }
    return currentTail;
  }

  shift() {
    if (!this.head) return;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  // add infornt
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      [this.head, this.tail] = [newNode, newNode];
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return;
    let counter = 0;
    let current = this.head;
    while (counter < idx) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(idx, value) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);
    const newNode = new Node(value);

    // get the node before the point of insertion
    const prev = this.get(idx - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    const toRemove = this.get(idx);
    const previous = this.get(idx);

    previous.next = toRemove.next;
    this.length--;
    return toRemove;
  }

  reverse() {
    if (this.length <= 1) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prv = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prv;
      prv = node;
      node = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList();

list.push("node 1");
list.push("node 2");
list.push("node 3");

