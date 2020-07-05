const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const headers = {
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
}

request({
    url:"http://daily.zhihu.com/",
    headers:headers
},(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res.body);
})
