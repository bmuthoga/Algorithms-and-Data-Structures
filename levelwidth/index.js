// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counter = [0]
  const array = [root, 's']

  while (array.length > 1) {
    const node = array.shift()

    if (node === 's') {
      counter.push(0)

      array.push(node)
    } else {
      array.push(...node.children)

      counter[counter.length - 1]++
    }    
  }

  return counter
}

module.exports = levelWidth;
