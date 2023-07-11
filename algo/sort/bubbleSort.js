const bubbleSort = (arr) => {

  let noSwap;
  const swap = (a, idx1, idx2) => {
    [a[idx1], a[idx2]] = [a[idx2], a[idx1]]
  }

  for(let i = arr.length; i > 0;i--){
    noSwap = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        console.log('arr: ', arr)
        console.log('swapping: ', arr[j], '-', arr[j+1])
        swap(arr, j, j+1)
        noSwap = false;
      } 
    }

    console.log('End of run >>>>>>>>>>>>>>>>>');
    if(noSwap) break;
    // if we don't swap then the array is sorted
  }

  return arr
}

console.log(bubbleSort([3,2,5,73,3,8,9,10,4]))