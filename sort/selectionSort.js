const selectionSort = (arr) => {
  const swap = (a, idx1, idx2) => {
    [a[idx1], a[idx2]] = [a[idx2], a[idx1]];
  };

  let minValIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    minValIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIdx]) {
        minValIdx = j;
      }
    }

    // found a smaller number
    if (minValIdx > i) {
      swap(arr, i, minValIdx);
    }
  }

  return arr;
};

console.log("><><><<><<><<>||||| ", selectionSort([2, 35, 1, 5,56]));

// selectionSort([2,35,1])
