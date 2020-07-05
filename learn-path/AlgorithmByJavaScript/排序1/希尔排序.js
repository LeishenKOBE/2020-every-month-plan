// 定义一个用来分割的步长；
// 按步长的长度K，对数组进行K趟排序；
// 不断重复上述步骤。

let shellSort = arr => {
    let gaps = [5, 3, 1];
    let length = arr.length;
    for (let g = 0, glen = gaps.length; g < gaps.length; ++g) {
        for (let i = gaps[g]; i < length; ++i) {
            let j;
            for (j = i; j >= gaps[g] && arr[j - gaps[g]] > arr[i]; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]]
            }
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}
let arr = [123, 342, 213, 543, 123312]

console.log(shellSort(arr))