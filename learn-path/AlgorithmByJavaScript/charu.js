function charu(arr) {
  for (let i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j > 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let arr = [1, 23, 4, 5121, 12, 123545, 124];
console.log(charu(arr));