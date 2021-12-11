export function bubbleSort(arr) {
  let animArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        animArr.push([arr[j], arr[j + 1]]);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //here react should change the colors of these bars representd by the arr index
        //we need a timeout for sure every time values are swapped, in this case, here

      }

    }
  }
  return animArr;
}