/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-27 11:01:00
 * @LastEditors: 石东昭
 * @LastEditTime: 2020-01-27 11:04:20
 */
const url = "https://www.lagou.com/zhaopin/webqianduan/2/?filterOption=2";

const request = require("request");
const cheerio = require("cheerio");

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER"
};
request({
    url:'https://www.zhipin.com/c101010100-p100901/?page=2&ka=page-2',
    method:'GET',
    headers:headers
},function(err,res){
    console.log(res.body)
})