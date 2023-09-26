class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      return (this.root = newNode) && this;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) return;
      if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    let current = this.root;

    while (true) {
      if (!current) return;
      if (current.value === val) return current;

      if (current.value > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  contains(val) {
    return !!this.find(val);
  }

  // Breadth First Search
  BSF() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(5);
bst.insert(10);
bst.insert(15);
bst.insert(12);

