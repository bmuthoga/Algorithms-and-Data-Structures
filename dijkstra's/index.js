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

const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }

    return lowest;
  }, null);
};

const dijkstra = (graph) => {
  // 1. Calculate lowest cost to reach finish node

  // costs: {finish: "infiinity", A: 5, B: 2}
  const costs = Object.assign({ finish: "infinity" }, graph.start);
  const parents = { finish: null };

  // graph: {start: { A: 5, B: 2 },...}
  // parents: {A: "start", B: "start", finish: null}
  for (let child in graph.start) {
    // add children of start node
    parents[child] = "start";
  }

  const processed = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];

    for (let n in children) {
      let newCost = cost + children[n];

      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }

      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  // 2. Get path to finish node

  let optimalPath = ["finish"];
  let parent = parents.finish;

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse(); // reverse array to get correct order

  const results = {
    distance: costs.finish,
    path: optimalPath,
  };

  return results; // {distance: 8, path: ['start', 'A', 'D', 'finish']}
};
