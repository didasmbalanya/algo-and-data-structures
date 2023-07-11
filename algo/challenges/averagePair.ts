/**
 * Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * @param arr
 * @param avg
 */
function averagePair(arr: number[], avg: number) {
  if (arr.length === 0) return false;

  let initial = 0;
  let final = arr.length - 1;

  while (initial < final) {
    const pairAvg = (arr[initial] + arr[final]) / 2;
    if (pairAvg === avg) return true;
    if (pairAvg > avg) {
      final--;
    } else {
      initial++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
