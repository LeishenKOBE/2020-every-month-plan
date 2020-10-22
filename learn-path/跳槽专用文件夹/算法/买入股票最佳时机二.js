// 买入股票的最佳时机

const maxProfit = (arr) => {
  let profit = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let temp = arr[i] - arr[i - 1];
    if (temp > 0) {
      profit += temp;
    }
  }
  return profit
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
