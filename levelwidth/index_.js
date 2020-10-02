function levelWidth(root) {
  const arr = [root, "s"];
  const result = [0];

  while (arr.length) {
    const node = arr.shift();

    if (node === "s") {
      arr.push(node);
      result.push(0);
    } else {
      arr.push(...root.children);
      result[result.length - 1]++;
    }
  }

  return result;
}
