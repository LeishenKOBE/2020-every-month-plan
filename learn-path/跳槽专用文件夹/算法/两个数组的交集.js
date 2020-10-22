// 未排序版本
const intersect = (arr1, arr2) => {
  const obj = {};
  for (let i = 0; i < arr1.length; i += 1) {
    obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
  }
  let k = 0;
  for (let i = 0; i < arr2.length; i += 1) {
    if (obj[arr2[i]] > 0) {
      obj[arr2[i]] -= 1;
      arr2[k] = arr2[i];
      k += 1;
    }
  }
  return arr2.slice(0, k);
};

// 排序版本
const intersectPlus = (arr1, arr2) => {
  let i = 0,
    j = 0,
    k = 0;

  arr1.sort((a, b) => {
    return a - b;
  });
  arr2.sort((a, b) => {
    return a - b;
  });
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      arr1[k] = arr1[i];
      k++;
      i++;
      j++;
    }
  }
  return arr1.slice(0, k);
};
let arr1 = [1, 2, 3, 4, 4, 13],
  arr2 = [1, 2, 3, 9, 10];

console.log(intersectPlus(arr1, arr2));
