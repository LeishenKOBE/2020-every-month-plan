// 从第一个元素开始，该元素可以认为已经被排序；
// 取出下一个元素，在已经排序的元素序列中从后向前扫描；
// 如果该元素（已排序）大于新元素，将该元素移到下一位置；
// 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// 将新元素插入到该位置后；
// 重复步骤2~5。
const insertionSort = arr => {
    const len = arr.length
    let temp
    for (var i = 1; i < len; i++) {
        /* 存储当前索引，便于后续与数组其他元素对比 */
        temp = arr[i]
        for (var j = i; j > 0 && temp < arr[j - 1]; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = temp
    }
    return arr
}

let arr = [123, 342, 23, 543, 123312]

console.log(insertionSort(arr))