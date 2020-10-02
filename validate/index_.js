function validate(node, max = null, min = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;
  if (node.left && !validate(node.left, node.data, min)) return false;
  if (node.right && !validate(node.right, max, node.data)) return false;
  return true;
}
