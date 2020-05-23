function choose(arr) {
  let length = arr.length;
  let minIndex, temp;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

let arr = [1, 23, 4, 5121, 12, 123545, 124];
console.log(choose(arr));

