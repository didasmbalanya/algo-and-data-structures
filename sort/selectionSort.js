const selectionSort = (arr) => {
  const swap = (a, idx1, idx2) => {
    [a[idx1], a[idx2]] = [a[idx2], a[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // found a smaller number
    if (lowest > i) {
      swap(arr, i, lowest);
    }
  }

  return arr;
};

console.log("><><><<><<><<>||||| ", selectionSort([2, 35, 1, 5,56]));

// selectionSort([2,35,1])
