// 买入股票最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i += 1) {
//     let temp = prices[i] - prices[i - 1];
//   }
// };

var minPathSum = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	let dp = [];
	for (let i = 0; i < m; i += 1) {
		for (let j = 0; j < n; j += 1) {
			dp[i][j] = 0;
		}
	}
	console.log(dp);
};
minPathSum([
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
]);
