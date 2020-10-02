const graphOutline = {
  root: {
    data: 1,
    children: [
      {
        data: 2,
        children: [
          {
            data: 4,
            children: [],
          },
          {
            data: 5,
            children: [
              {
                data: 3,
                children: [],
              },
              {
                data: 6,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
};

function getMinScore(productsNodes, productsFrom, productsTo) {
  if (productsNodes < 1 || productsNodes > 500) return -1;

  const productsTable = {};

  productsFrom.forEach((product, idx) => {
    if (product === productsTo[idx]) return -1;
    if (product < 1 || product > productsNodes) return -1;
    if (productsTo[idx] < 1 || productsTo[idx] > productsNodes) return -1;

    if (!productsTable[product]) {
      productsTable[product] = [productsTo[idx]];
    } else {
      productsTable[product].push(productsTo[idx]);
    }
  });

  console.log("productsTable: ", productsTable);

  const nodesArr = Object.keys(productsTable);
  console.log({ nodesArr });

  const firstNode = nodesArr[0];

  const graph = Object.assign(
    { start: firstNode },
    {
      ...productsTable,
      [productsTable[nodesArr[nodesArr.length - 1]]]: "finish",
      finish: null,
    }
  );

  console.log("graph: ", graph);

  const trios = [];

  for (key in productsTable) {
    if (productsTable[key].length === 2) {
      trios.push({ nodes: [parseInt(key), ...productsTable[key]], sum: 0 });
    }
  }

  console.log("trios: ", trios);

  if (!trios.length) return -1;

  for (let trio of trios) {
    trio.nodes.forEach((node, idx) => {
      for (key in productsTable) {
        if (key !== node && productsTable[key].includes(node))
      }
    })
  }

  console.log("---------- END OF FUNCTION -------------");
}

console.log(getMinScore(6, [1, 2, 2, 3, 4, 5], [2, 4, 5, 5, 5, 6]));
console.log(getMinScore(6, [1, 1, 2, 2, 3, 4], [2, 3, 3, 4, 4, 5]));
