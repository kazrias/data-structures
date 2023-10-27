class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    const node = new Node(data)
    if (this.head === null) {
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }
    let nodeToRemove;
    if (index === 0) {
      nodeToRemove = this.head;
      this.head = this.head.next
    }
    else {
      let prev = this.head;
      for (let i = 0; i < index - i; i++) {
        prev = prev.next
      }
      nodeToRemove = prev.next;
      prev.next = nodeToRemove.next;
    }
    this.size--;
    return nodeToRemove.data;
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return !this.size
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList()
  }
  push(data) {
    this.list.prepend(data);
  }
  pop() {
    return this.list.removeAt(0);
  }
  top() {
    if (this.isEmpty())
      return null
    return this.list.head.data;
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  getSize() {
    return this.list.size
  }
}

let stack = new Stack()

console.log(stack.isEmpty());

console.log(stack.top());
console.log(stack.getSize());
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
console.log(stack.pop());
console.log(stack.top());