const request = require('request');
const cheerio = require('cheerio');

// for(let i=1;i<2;i++){

// }

let url = 'https://www.gushiwen.org/';
request({
    url,
    method: 'get'
}, (err,res,body) => {
    console.log(body)
})