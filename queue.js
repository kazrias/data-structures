class Queue {
  #arr = []
  enqueue(el) {
    this.#arr.push(el)
  }
  dequeue() {
    return this.#arr.shift()
  }
  front() {
    return this.#arr[0]
  }
  isEmpty() {
    return !this.#arr.length
  }
  size() {
    return this.#arr.length
  }
  print() {
    return this.#arr
  }
}

let queue=new Queue()
console.log(queue.print());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.print());
console.log(queue.size());
console.log(queue.isEmpty());