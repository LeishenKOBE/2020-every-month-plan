/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-27 11:06:02
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-27 11:20:35
 */
const http = require('http')

let req = http.request('http://web.itheima.com/teacher.html#ajavaee',res=>{
    let chunks = []
    res.on('data',chunk=>{
        chunks.push(chunk)
    })
    res.on('end',()=>{
        console.log(Buffer.concat(chunks).toString('utf-8'))
    })
})
