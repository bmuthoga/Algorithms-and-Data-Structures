const Stack = require("./stack");

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(n) {
    this.firstStack.push(n);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const result = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return result;
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const result = this.secondStack.peek();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return result;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek()); // returns 1
console.log("------");
console.log(q.remove()); // returns 1
console.log("------");
console.log(q.remove()); // returns 2
console.log("------");
