import { funcTimeCalc } from "./funcTimeCalc";

/**
 * adds all the numbers upto and including N
 * @param n
 */
export function addUpto(n: number) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

export const addUpto2 = (n: number) => {
  return (n * (n + 1)) / 2;
};

funcTimeCalc(6, addUpto);
funcTimeCalc(6, addUpto2);
