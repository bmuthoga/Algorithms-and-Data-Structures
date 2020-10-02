class Stack {
  constructor() {
    this.data = [];
  }

  push(n) {
    this.data.push(n);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop()); // returns 2
console.log("------");
console.log(s.pop()); // returns 1
