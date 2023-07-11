const naiveSearch = (long, pattern) => {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) break;
      if (j === pattern.length - 1) counter++;
    }
  }

  return counter;
};

console.log(naiveSearch("womgwomg", "omg"));
