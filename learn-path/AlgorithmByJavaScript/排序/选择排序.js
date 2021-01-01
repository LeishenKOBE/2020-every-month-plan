//选择排序也是属于平方阶
//主要方法是  1.现在所有数中找到最小的数，然后把这个数和第一个数字交换位置，然后在剩下的数字中找到最小的数字和第二个数字交换位置，循环下去

let choose = (arr) => {
    let min;
    for (let i = 0; i < arr.length - 1; ++i) {
        min = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

console.log(choose([3,4213,412,654,132]))