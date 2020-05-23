function bSearch1(arr, target) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = right;
    if (arr[mid] === target) {
      if (mid === 0 || arr[mid - 1] !== target) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(bSearch1([1, 2, 567, 8, 90, 12], 8));
