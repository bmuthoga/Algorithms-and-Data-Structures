class Queue {
  constructor() {
    this.queue = [];
  }

  add(n) {
    this.queue.unshift(n);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}

module.exports = Queue;

// const q = new Queue();
// q.add(1);
// console.log("peeking: ", q.peek());
// console.log(q.remove());
// console.log(q.remove());
// console.log("--------");
// q.add(1);
// console.log("peeking: ", q.peek());
// q.add(2);
// console.log("peeking: ", q.peek());
// q.add(3);
// console.log("peeking: ", q.peek());
// console.log(q.remove());
// console.log(q.remove());
// console.log(q.remove());
// console.log(q.remove());
// console.log("--------");
