// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     console.log('incoming arr', arr);
//     let currentVal = arr[i];
//     console.log('arr[j] =', arr[i-1], 'current value = ', currentVal);
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log('array after push', arr);
//     }
//     console.log('value of J', j);
//     arr[j + 1] = currentVal;
//     console.log("adding to new arr", arr);
//   }

//   return arr;
// };

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {

    let currentValue = arr[i];
    debugger;
    let checkValueIdx = i - 1; 
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      checkValueIdx = j - 1;
    }
    arr[checkValueIdx + 1] = currentValue;
  }

  return arr;
};

console.log(insertionSort([4, 22, 1, 3]));

