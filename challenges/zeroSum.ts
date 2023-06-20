/**
 *
 * @param arr
 * @returns a subset of the given array of a pair of numbers who's sum add upto 0
 */
export const zeroSum = (arr: number[]): [number, number] | void => {
  // position indexes
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(zeroSum([-4, -3, -2, -1, 0, 1, 2, 3,4, 10]));
