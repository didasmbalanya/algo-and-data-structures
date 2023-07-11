/**
 * Same accepts two arrays.
 * @param arr 
 * @param arr2 
 * @returns true if every calue in the first array has a corresponding squared in the second arr
 */
export const same = (arr: number[], arr2: number[]): boolean => {
  if (arr.length !== arr2.length) return false;
  const squared = (num: number) => num * num;
  for (let num of arr) {
    const found = squared(num)
    if (!arr2.includes(found)) {
      return false;
    } else {
      const index = arr2.indexOf(found);
      arr2.splice(index, 1)
    }
  }
  return true;
};

console.log(same([1,2,3], [1,4,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [1,4,4]))
