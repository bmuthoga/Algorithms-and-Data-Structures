function chunk(array, size) {
  const result = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }

  return result;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
chunk([1, 2, 3], 1);
chunk([1, 2, 3, 4, 5], 3);
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);
