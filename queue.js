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
