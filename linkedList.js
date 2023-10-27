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

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }
    else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }
    this.size++;
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

  insert(data, index) {
    if (index > this.size || index < 0)
      return false
    if (index === 0) {
      this.prepend(data)
    }
    else {
      const node = new Node(data);
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
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

  remove(data) {
    if (this.isEmpty()) return false
    if (this.head.data === data) {
      this.head = this.head.next
      this.size--;
    }
    else {
      let prev = this.head;
      while (prev.next && prev.next.data !== data) {
        prev = prev.next
      }
      if (prev.next) {
        const nodeToRemove = prev.next;
        prev.next = nodeToRemove.next;
        this.size--;
      }
      else {
        return false
      }
    }
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return !this.size
  }

  printList() {
    if (this.isEmpty()) {
      return 'Linked list is empty'
    }
    let currNode = this.head;
    let valuesArr = []
    while (currNode) {
      valuesArr.push(currNode.data)
      currNode = currNode.next
    }
    return valuesArr;
  }
}

