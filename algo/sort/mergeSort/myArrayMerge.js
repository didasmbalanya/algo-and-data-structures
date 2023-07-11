const arrayMerge = (arr1, arr2) => {
  const combineArrayTotal = arr1.length + arr2.length;
  let joinArray = [];

  // assuming we itterate over the shorter array
  for (let i = 0; i < combineArrayTotal; i++) {
    const firstArr1 = arr1[0];
    const firstArr2 = arr2[0];
    if (firstArr1 === firstArr2) {
      joinArray.push(arr1.shift());
      joinArray.push(arr2.shift());
    } else if (firstArr1 < firstArr2) {
      joinArray.push(arr1.shift());
    } else {
      joinArray.push(arr2.shift());
    }

    if (arr1.length === 0) {
      joinArray = [...joinArray, ...arr2];
      break;
    }
    if (arr2.length === 0) {
      joinArray = [...joinArray, ...arr1];
      break;
    }

    console.log("join Arry now", joinArray);
  }

  return joinArray;
};

const mergeSortedArrays = (a1, a2) => {
  let [i, j] = [0, 0];

  const joinArray = [];

  while (i < a1.length || j < a2.length) {
    if (a1[i] < a2[j]) {
      joinArray.push(a1[i]);
      i++;
    } else if (a2[j] < a1[i]) {
      joinArray.push(a2[j]);
      j++;
    } else {
      joinArray.push(a1[i], a2[j]);
      j++;
      i++;
    }

    if (a1[i] === undefined) {
      joinArray.push(...a2.slice(j));
      break;
    }
    if (a2[j] === undefined) {
      joinArray.push(...a1.slice(i));
      break;
    }
  }

  return joinArray;
};

module.exports = { mergeSortedArrays };
