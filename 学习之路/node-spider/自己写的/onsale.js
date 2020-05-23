const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const headers = {
    'User-Agent':"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
}

request({
    url:'http://www.qsjsc.com/index.php?r=l&page=2',
    headers:headers
},function(err,res){
    if(err){
        console.log(err)
    }
    console.log(res.body)
})