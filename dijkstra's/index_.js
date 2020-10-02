const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

const costs = {
  A: 5,
  B: 2,
  D: 9,
  finish: "infinity",
};

const parents = {
  A: "start",
  B: "start",
  finish: null,
  D: "B",
};

const processed = ["start", "A", "B", "D"];

const findLowestCostNode = (costs, processed) => {
  console.log("findLowestCostNode costs: ", costs);
  console.log("findLowestCostNode processed: ", processed);

  const knownNodes = Object.keys(costs);

  // findLowestCostNode costs:  { finish: 8, A: 5, B: 2, D: 7, C: 9 }
  // findLowestCostNode processed:  [ 'B', 'A', 'D' ]
  const lowestCostNode = knownNodes.reduce((currentNode, nextNode) => {
    console.log("reduce loop: ", { currentNode, nextNode });
    if (currentNode === null && !processed.includes(nextNode)) {
      console.log("check one");
      currentNode = nextNode;
    }

    if (costs[nextNode] < costs[currentNode] && !processed.includes(nextNode)) {
      console.log("check two");
      currentNode = nextNode;
    }

    return currentNode;
  }, null);

  return lowestCostNode;

  //   const lowestCostNode = knownNodes.reduce((lowest, node) => {
  //     if (lowest === null && !processed.includes(node)) {
  //       lowest = node;
  //     }

  //     if (costs[node] < costs[lowest] && !processed.includes(node)) {
  //       lowest = node;
  //     }

  //     return lowest;
  //   }, null);

  //   return lowestCostNode;
  // };
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph) => {
  console.log("Graph: ", graph);

  const trackedCosts = Object.assign({ finish: Infinity }, graph.start);

  console.log("Initial costs: ", trackedCosts);

  // track paths
  const trackedParents = { finish: null };

  for (let child in graph.start) {
    trackedParents[child] = "start";
  }

  console.log("Initial parents: ", trackedParents);

  // track nodes that have already been processed
  const processedNodes = [];

  // Set initial node. Pick lowest cost node.
  let node = findLowestCostNode(trackedCosts, processedNodes);

  console.log("Initial node: ", node);

  console.log("while loop starts: ");

  while (node) {
    console.log(`****** currentNode: ${node} *********`);

    let costToReachNode = trackedCosts[node];
    let childrenOfNode = graph[node];

    for (let child in childrenOfNode) {
      let costFromNodeToChild = childrenOfNode[child];
      let costToChild = costToReachNode + costFromNodeToChild;

      if (!trackedCosts[child] || trackedCosts[child] > costToChild) {
        trackedCosts[child] = costToChild;
        trackedParents[child] = node;
      }

      console.log("trackedCosts: ", trackedCosts);
      console.log("trackedParents: ", trackedParents);
      console.log("----------");
    }

    processedNodes.push(node);

    node = findLowestCostNode(trackedCosts, processedNodes);
  }

  console.log("while loop ends: ");

  console.log("parents: ", trackedParents);
  console.log("knownCosts: ", trackedCosts);
  console.log("processed: ", processedNodes);

  let optimalPath = ["finish"];
  let parent = trackedParents.finish;

  while (parent) {
    optimalPath.push(parent);
    parent = trackedParents[parent];
  }

  optimalPath.reverse();

  const results = {
    distance: trackedCosts.finish,
    path: optimalPath,
  };

  return results;
};

console.log("dijkstra: ", dijkstra(graph));
