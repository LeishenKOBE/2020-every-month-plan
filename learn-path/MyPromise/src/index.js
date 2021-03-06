import {MyPromise} from './myPromise.js'

// let p1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('石东昭')
//     }, 1000)
// })
//
// let p2 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('链式调用的结果')
//     }, 2000)
// })
//
// p1.then((data) => {
//     console.log(data)
//     return p2
// }).then((data) => {
//     console.log(data)
// })

let pro = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    },1000)
})
pro.then((data) => {
    console.log(data)
})
