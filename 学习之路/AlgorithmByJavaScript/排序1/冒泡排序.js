//冒泡排序的时间复杂度是平方阶
//冒泡排序是两个相邻的数相互比较，如果左边的数字大于右边的数字，则交换位置，直到最后一个，再循环
let maopao = (arr) => {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

let arr = [2, 3, 8, 4, 6, 123, 46, 435];

console.log(maopao(arr));