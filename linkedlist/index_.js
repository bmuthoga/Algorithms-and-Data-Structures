class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      ++count;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return;

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) return (this.head = null);

    let currentNode = this.head;

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  insertLast(data) {
    if (!this.getLast()) {
      this.head = new Node(data);
    } else {
      this.getLast().next = new Node(data);
    }
  }

  getAt(n) {
    let idx = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (idx === n) {
        return currentNode;
      }

      ++idx;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  removeAt(n) {
    if (!this.head) return;

    if (n === 0) {
      return (this.head = this.head.next);
    }

    let previousNode = this.getAt(n - 1);

    if (!previousNode || !previousNode.next) return;

    previousNode.next = previousNode.next.next;
  }

  insertAt(data, n) {
    if (!this.getFirst()) {
      return this.insertFirst(data);
    }

    if (n === 0) {
      return (this.head = new Node(data, this.head));
    }

    let previousNode = this.getAt(n - 1);

    if (!previousNode || !previousNode.next) return;

    previousNode.next = new Node(data, previousNode.next.next);
  }
}

const n = new Node("There");
console.log(n.data); // 'There'
console.log(n.next); // null
console.log("-------");
const n2 = new Node("Hi", n);
console.log(n2.next); // returns n
console.log("-------");
const l = new LinkedList();
l.insertFirst(1);
console.log(l.head.data);
l.insertFirst(2);
console.log(l.head.data);
console.log(l.head);
console.log("-------");
const l2 = new LinkedList();
console.log(l2.size());
l2.insertFirst(1);
l2.insertFirst(1);
l2.insertFirst(1);
l2.insertFirst(1);
console.log(l2.size());
console.log("-------");
const l3 = new LinkedList();
l3.insertFirst("a");
l3.insertFirst("b");
console.log(l3.getFirst()); // returns Node instance with data 'a'
const l4 = new LinkedList();
l4.insertFirst(1);
console.log(l4.getFirst().data);
l4.insertFirst(2);
console.log(l4.getFirst().data);
console.log("-------");
const l5 = new LinkedList();
l5.insertFirst(2);
console.log(l5.getLast());
l5.insertFirst(1);
console.log(l5.getLast());
const l6 = new LinkedList();
l6.insertFirst("a");
l6.insertFirst("b");
console.log(l6.getLast()); // returns node with data 'a'
console.log("-------");
const l7 = new LinkedList();
l7.insertFirst("a");
l7.insertFirst("b");
l7.clear();
console.log(l7.size()); // returns 0
console.log("-------");
const l8 = new LinkedList();
l8.insertFirst("a");
l8.insertFirst("b");
l8.removeFirst();
console.log(l8.getFirst()); // returns node with data 'a'
const l9 = new LinkedList();
l9.insertFirst("a");
l9.removeFirst();
console.log(l9.size());
console.log(l9.getFirst());
const l10 = new LinkedList();
l10.insertFirst("c");
l10.insertFirst("b");
l10.insertFirst("a");
l10.removeFirst();
console.log(l10.size());
console.log(l10.getFirst().data);
l10.removeFirst();
console.log(l10.size());
console.log(l10.getFirst().data);
console.log("-------");
const l11 = new LinkedList();
l11.insertFirst("a");
l11.insertFirst("b");
l11.removeLast();
console.log(l11.size()); // returns 1
console.log(l11.getLast()); // returns node with data of 'b'
const l12 = new LinkedList();
l12.insertFirst("a");
l12.removeLast();
console.log(l12.head);
const l13 = new LinkedList();
l13.insertFirst("c");
l13.insertFirst("b");
l13.insertFirst("a");
l13.removeLast();
console.log(l13.size());
console.log(l13.getLast().data);
console.log("-------");
const l14 = new LinkedList();
l14.insertFirst("a");
l14.insertFirst("b");
l14.insertLast("c");
console.log(l14.getLast()); // returns node with data 'C'
console.log("-------");
const l15 = new LinkedList();
l15.insertFirst("a");
l15.insertFirst("b");
l15.insertFirst("c");
console.log(l15.getAt(1)); // returns node with data 'b'
const l16 = new LinkedList();
console.log(l16.getAt(10));
l16.insertLast(1);
l16.insertLast(2);
l16.insertLast(3);
l16.insertLast(4);
console.log(l16.getAt(0));
console.log(l16.getAt(1));
console.log(l16.getAt(2));
console.log(l16.getAt(3));
console.log("-------");
const l17 = new LinkedList();
l17.insertFirst("a");
l17.insertFirst("b");
l17.insertFirst("c");
l17.removeAt(1);
console.log(l17.getAt(1)); // returns node with data 'a'
console.log(l17.head);
