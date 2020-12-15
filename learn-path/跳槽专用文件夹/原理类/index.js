const arr = [1, 2, 3, 4, 5];
arr.reduce((all, cur, index, src) => {
  console.log(all, cur, index);
  return all + cur;
});
