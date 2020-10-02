class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);

      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);

      fn(node);
    }
  }
}

/*
  {
    root: { // node
      data: 'fdf',
      children: [ // arr of nodes
        { // node
          data: 'dfdfdfg',
          children: [ // arr of nodes
            { //node
              data: 'dfdff',
              children: [...]
            }
          ]
        }
      ]
    }
  }
  */

// {
//   root: { // node
//     data: 'a',
//     children: [ // arr of nodes
//       { // node
//         data: 'b',
//         children: [ // arr of nodes
//           { //node
//             data: 'd',
//             children: []
//           }
//         ]
//       },
//       { // node
//         data: 'c',
//         children: []
//       }
//     ]
//   }
// }
