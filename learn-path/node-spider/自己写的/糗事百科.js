/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-27 11:01:00
 * @LastEditors  : 石东昭
 * @LastEditTime : 2020-01-27 11:03:34
 */
const request = require('request')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
for (let i = 1; i <= 10; i++) {
    request({
        url: "https://www.qiushibaike.com/8hr/page/" + i + '/',
        method: "GET",
        headers: {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
        }
    }, function (err, res) {
        const arr = []
        var $ = cheerio.load(res.body);
        $('.recmd-right .recmd-content').each(function (index, e) {
            arr.push($(e).text())
        })
        fs.writeFile(i + '.txt', arr, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('成功了')
            }
        })
    })
}
