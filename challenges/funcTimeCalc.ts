export const funcTimeCalc = (args: any, fun: Function) => {
  const t1 = performance.now();
  fun(args);
  const t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
};