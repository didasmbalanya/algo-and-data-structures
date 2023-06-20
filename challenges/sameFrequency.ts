/**
 * Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 * @param x
 * @param y
 * @returns
 */
function sameFrequency(x: number, y: number) {
  const xStr = x.toString();
  const yStr = y.toString();

  const xcounter: { [key: string]: number } = {};
  if (xStr.length !== yStr.length) return false;
  for (let value of xStr) {
    xcounter[value] = (xcounter[value] || 0) + 1;
  }
  for (let value of yStr) {
    if (!(value in xcounter)) {
      return false;
    }
    xcounter[value] = xcounter[value] - 1;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
