const cheerio = require('cheerio');
const fs = require('fs');
const url = require('url');
const request = require('request');
let headers = {'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"}

let urlArr = [];
let titleArr = [];
let picUrl = [];
for(let i = 1;i<2;i++){
    let url = 'https://bbs.hupu.com/selfie-'+i;
    request({
        url:url,
        headers:headers,
        method:'GET'
    },function(err,res){
        if(err){
            console.log(err)
        }else{
            // console.log(res.body)
            let $ = cheerio.load(res.body);
            $('.for-list li .titlelink.box .truetit').each(function(index,e){
                titleArr.push($(e).attr().href)
            })
        }
    })
    setTimeout(()=>{
        console.log(titleArr)
        request({
            url:'https://bbs.hupu.com'+titleArr[0],
            headers:headers,
            method:'GET'
        },function(err,res){
            console.log(res.body)
        })
    },2000)
}
