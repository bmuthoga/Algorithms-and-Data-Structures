const dijkstra = (graph) => {
  const parents = { finish: null };
  const knownCosts = Object.assign({ finish: Infinity }, graph.start);
  const processed = [];

  Object.keys(graph.start).forEach((node) => {
    parents[node] = "start";
  });

  console.log("parents: ", parents);
  console.log("knownCosts: ", knownCosts);

  let lowestCostNode = findLowestCostNode(knownCosts, processed);

  console.log({ lowestCostNode });

  while (lowestCostNode) {
    console.log("****WHILE LOOP BEGINNING*******");

    const nodeChildren = graph[lowestCostNode];

    for (let childNode in nodeChildren) {
      const nodeCost = nodeChildren[childNode];
      const totalNodeCost = nodeCost + knownCosts[lowestCostNode];

      if (!knownCosts[childNode] || knownCosts[childNode] > totalNodeCost) {
        knownCosts[childNode] = totalNodeCost;
        parents[childNode] = lowestCostNode;
      }
    }

    processed.push(lowestCostNode);
    lowestCostNode = findLowestCostNode(knownCosts, processed);
  }

  console.log("parents: ", parents);
  console.log("knownCosts: ", knownCosts);
  console.log("processed: ", processed);

  const path = ["Finish"];
  let currentNode = parents.finish;

  while (currentNode) {
    path.unshift(currentNode);
    currentNode = parents[currentNode];
  }

  console.log({ path });

  return {
    distance: knownCosts.finish,
    path,
  };
};

const findLowestCostNode = (knownCosts, processed) => {
  console.log("findLowestCostNode: ", knownCosts, processed);

  const knownCostsNodes = Object.keys(knownCosts);
  const lowestCostNode = knownCostsNodes.reduce((current, next) => {
    if (current === null && !processed.includes(next)) {
      current = next;
    }

    if (knownCosts[next] < knownCosts[current] && !processed.includes(next)) {
      current = next;
    }

    return current;
  }, null);

  console.log("findLowestCostNode return val: ", { lowestCostNode });

  return lowestCostNode;
};

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

console.log(dijkstra(graph));
