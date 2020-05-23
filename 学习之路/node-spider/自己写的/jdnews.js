/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-27 11:01:00
 * @LastEditors: 石东昭
 * @LastEditTime: 2020-01-27 11:04:14
 */
const request = require("request");
const cheerio = require("cheerio");

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER"
};

request({url:'http://jandan.net/',method:'GET',headers:headers},function(err,res){
    if(err){
        console.log(err)
    }else{
        // console.log(res.body)
        var $ = cheerio.load(res.body);
        var title = [];
        var link = []
        $('.indexs h2 a').each(function(index,e){
            title.push($(e).text())
        })
        $('.indexs h2 a').each(function(index,e){
            link.push($(e).attr().href)
        })
        
        console.log(link)
    }
})