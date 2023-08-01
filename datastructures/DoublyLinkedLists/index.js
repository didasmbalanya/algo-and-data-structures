class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      [this.head, this.tail] = [newNode, newNode];
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return;

    const popped = this.tail;
    if (this.length === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.tail = popped.previous;
      this.tail.next = null;
      popped.previous = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.length) return;

    const popped = this.head;
    if (this.length === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.head = popped.next;
      this.head.previous = null;
      popped.next = null;
    }
    this.length--;
    return popped;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      [this.head, this.tail] = [newNode, newNode];
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === 0) return this.head;
    if (idx === this.length - 1) return this.tail;

    const half = this.length / 2;
    let current, counter;

    if (idx <= half) {
      counter = 0;
      current = this.head;
      // start at the beginning
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (counter !== idx) {
        current = current.previous;
        counter--;
      }
    }

    return current;
  }

  set(idx, value) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    if (idx > this.length || idx < 0) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);
    const newNode = new Node(value);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;

    // insert in between
    (beforeNode.next = newNode), (newNode.previous = beforeNode);
    (newNode.next = afterNode), (afterNode.previous = newNode);
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    if (removedNode) {
      const beforeNode = removedNode.previous;
      const afterNode = removedNode.next;

      beforeNode.next = afterNode;
      afterNode.previous = beforeNode;
      (removedNode.next = null), (removedNode.previous = null);

      this.length--;
      return removedNode;
    }
    return false;
  }
}

Math.max();

const list = new DoublyLinkedList();

list.push("Node 0");
list.push("Node 1");
list.push("Node 2");
list.push("Node 3");
