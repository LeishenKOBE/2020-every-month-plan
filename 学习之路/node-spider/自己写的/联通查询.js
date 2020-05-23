const request = require('request');
const cheerio = require('cheerio');
const url = require('url');
const name = url.parse('石东昭')
console.log(name)
request('https://m.10010.com/mall-mobile/groupBuyingCheck/checkReteMirabileCustInfo?province=51&city=510&certName=石东昭&certNum=13018119920311423X',function(err,res){
    console.log('res',res)
})