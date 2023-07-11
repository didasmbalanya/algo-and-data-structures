const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

module.exports = { pivotHelper };
