function nestedEvenSum(obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!

  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>> obj <<<<<<<<<<<<<<<<<<<<<\n\n");
  console.log(obj);
  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");

  
  console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>> new sum <<<<<<<<<<<<<<<<<<<<<\n\n')
  console.log(sum)
  console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
  

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "number") {
      sum += value;
      delete obj[key];
    } else if (!value || Array.isArray(value) || typeof value !== "object") {
      delete obj[key];
    } else {
      nestedEvenSum(value, sum);
    }
  }

  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>> sum <<<<<<<<<<<<<<<<<<<<<\n\n");
  console.log(sum);
  console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj2); // 6
// nestedEvenSum(obj2); // 10
