// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) return null

    let node = this.head

    while (node) {
      if (!node.next) return node

      node = node.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return

    this.head = this.head.next
  }

   removeLast() {
    if (!this.head) return

    if (!this.head.next) {
      return this.head = null
    }

    let previous = this.head
    let node = this.head.next

    while (node.next) {
      previous = node

      node = node.next
    }

    previous.next = null
  }

  // removeLast() {
  //   if (!this.head) return

  //   if (!this.head.next) {
  //     return this.head = null
  //   }

  //   let previousNode = {}
  //   let currentNode = this.head

  //   while (currentNode) {
  //     if (!currentNode.next) {
  //       previousNode.next = null
  //     } else {
  //       previousNode = currentNode
  //     }

  //     currentNode = currentNode.next
  //   }
  // }

  insertLast(data) {
    if (!this.getLast()) {
      // the list is empty
      this.head = new Node(data) 
    } else {
      // the list is not empty
      this.getLast().next = new Node(data) 
    }
  }

  getAt(integer) {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === integer) {
        return node
      }

      counter++
      node = node.next
    }

    return node // or return null
  }

  removeAt(integer) {
    if (!this.head) return

    if (integer === 0) {
      return this.head = this.head.next
    }

    const previousNode = this.getAt(integer - 1)

    if (!previousNode || !previousNode.next) return

    previousNode.next = previousNode.next.next
  }

  insertAt(data, integer) {
    if (!this.head) return this.insertFirst(data)

    if (integer === 0) {
      return this.head = new Node(data, this.head)
    }

    const previousNode = this.getAt(integer - 1) || this.getLast()

    const node = new Node(data, previousNode.next)

    previousNode.next = node
  }

  forEach(fn) {
    let node = this.head

    while (node) {
      fn(node)

      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head

    while (node) {
      yield node

      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
