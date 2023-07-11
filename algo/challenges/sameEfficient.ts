/**
 * Same accepts two arrays. Uses the frequency counter
 * @param arr
 * @param arr2
 * @returns true if every calue in the first array has a corresponding squared in the second arr
 */
export const sameEfficient = (arr: number[], arr2: number[]): boolean => {
  // Check for equal numbers in both arrays
  if (arr.length !== arr2.length) return false;

  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  // count all the regular number occurences
  for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Count the squared number occurences
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!((key as unknown as number) ** 2 in frequencyCounter2)) {
      return false;
    }

    if (
      frequencyCounter2[(key as unknown as number) ** 2] !==
      frequencyCounter1[key]
    ) {
      return false;
    }
  }
  return true;
};


console.log(sameEfficient([1,2,3], [1,4,9]))
console.log(sameEfficient([1,2,3], [1,9]))
console.log(sameEfficient([1,2,1], [1,4,4]))