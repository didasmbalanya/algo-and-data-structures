/**
 * accepts a sorted array, and counts the unique values in the array
 * @param arr
 * @returns the unique values in the array
 */
function countUniqueValues(arr: number[]) {
  // add whatever parameters you deem necessary - good luck!
  let counter = 0;
  let nextUnique = 1;
  for (let i of arr) {
    if (i !== arr[nextUnique]) {
      counter++;
      nextUnique++;
    } else {
      nextUnique++;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
