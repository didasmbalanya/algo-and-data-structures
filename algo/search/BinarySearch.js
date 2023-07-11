const binarySearch = (arr, value ) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/2);  

  while(arr[middle] !== value && start <= end){
    console.log("start --",start );
    console.log("middle ==",middle );
    console.log("end ==",end );

    if(value > arr[middle]){
      start = middle + 1
    } else {
      end = middle - 1;
    }

    middle = Math.floor((start + end)/2);

    console.log("start ",start );
    console.log("middle ",middle );
    console.log("end ",end );
    
  }
  
  if(arr[middle] === value){
    return middle
  }
  return -1
}


console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>>  <<<<<<<<<<<<<<<<<<<<<\n\n')
console.log(binarySearch([1,2,3,4,5],2) )
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
