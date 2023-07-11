const { mergeSortedArrays } = require("./myArrayMerge");

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
};

// TO DO repeat merge sort 2
const mergeSort2 = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);

  console.log("Calling merge sort with", arr);
  const left = mergeSort2(arr.slice(0, mid));
  const right = mergeSort2(arr.slice(mid));
  return mergeSortedArrays(left, right);
};
console.log(mergeSort2([10, 24, 76, 73]));
