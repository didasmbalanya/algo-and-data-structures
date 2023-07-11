const { pivotHelper } = require("./QuickSortHelpers");

const quickSort = (arr, left = 0, right = arr.length - 1) => {

  if(left < right){
    let pivotIdx = pivotHelper(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1)
    // right
    quickSort(arr, pivotIdx + 1, right)
  }

  return arr;
};

console.log(quickSort([12,3,4,78,4,6,6]));
