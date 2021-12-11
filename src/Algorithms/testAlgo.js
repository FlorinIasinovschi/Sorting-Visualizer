
export function sortAlgo(arr) {
  for (let i = 0; i < arr.length; i++) {
    //newArr.push(i);
    console.log("things happening in loop");
    if (arr[i] > arr[i + 1]) {
      //console.log("is doing");
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      let c = 0;
      while (arr[i - c] < arr[(i - 1) - c]) {
        let temp2 = arr[(i - 1) - c];
        arr[(i - 1) - c] = arr[i - c];
        arr[i - c] = temp2;
        c++
      }
    }


  }

  return arr;
}

