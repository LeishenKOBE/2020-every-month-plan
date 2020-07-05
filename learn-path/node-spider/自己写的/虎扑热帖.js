const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
let baseUrl = 'https://bbs.hupu.com'
const headers = {
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
}

let title = [];
let link = [];
let zuhe = []

request({
    url:"https://bbs.hupu.com/all-gambia",
    headers:headers,
    method:"GET"
},function(err,res){
    // console.log(res.body)
    var $ = cheerio.load(res.body);
    $('.list ul li .textSpan a').each(function(index,e){
        title.push($(e).attr().title)
    })
    $('.list ul li .textSpan a').each(function(index,e){
        link.push(baseUrl+$(e).attr().href)
    })
    for(var i =0;i<title.length;i++){
        zuhe.push({
            "标题":title[i],
            "链接":link[i]
        })
    }
    fs.writeFile('hupu.json',JSON.stringify(zuhe),function(err){
        if(err){
            console.log(err)
        }else{
            console.log('成功')
        }
    })
})