const request = require('request')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
var all = []
for (let i=0;i<10;i++){
    request({
        url:"https://movie.douban.com/top250?start="+25*i+"&filter=",
        method:"GET",
        headers:{
            'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
        }
    },function(err,res){
        var arr = []
        var aa = []

        var fenshu = []
        var quato = []
        var $ = cheerio.load(res.body);
        $('.hd a .title:first-child').each(function(index,e){
            arr.push($(e).text())
        })
        $('.info .bd p:first-child').each(function(index,e){
            aa.push($(e).text().split('\n')[1].split('主演')[0].trim())
        })
        $('.info .bd .star .rating_num').each(function(index,e){
            fenshu.push($(e).text())
        })
        $('.info .bd .quote .inq').each(function(index,e){
            quato.push($(e).text())
        })
        for(let j = 0;j<arr.length;j++){
            all.push({
                '电影名称':arr[j],
                '导演':aa[j],
                '评分':fenshu[j],
                '名言':quato[j]
            })
        }
        
    })
    
}
setTimeout(()=>[
    fs.writeFileSync('1.txt',JSON.stringify(all),function(err){
        if(err){
            console.log(err)
        }else{
            console.log('成功了')
        }
    })
],10000)