const Queue = require("./queue_");

function weave(queueOne, queueTwo) {
  const queueThree = new Queue();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      queueThree.add(queueOne.remove());
    }

    if (queueTwo.peek()) {
      queueThree.add(queueTwo.remove());
    }
  }

  return queueThree;
}

/*
[2,1]
['Y', 'There', 'Hi']

['Y', 'There', 2, 'Hi', 1]
*/

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add("Hi");
queueTwo.add("There");
queueTwo.add("Y");
const q = weave(queueOne, queueTwo);
console.log("third queue: ", q);
console.log("third queue data: ", q.queue);
console.log("--------");
console.log(q.remove()); // 1
console.log("--------");
console.log(q.remove()); // 'Hi'
console.log("--------");
console.log(q.remove()); // 2
console.log("--------");
console.log(q.remove()); // 'There'
console.log("--------");
