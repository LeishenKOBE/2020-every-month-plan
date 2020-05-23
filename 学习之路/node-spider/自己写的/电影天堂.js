const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.ygdy8.net/html/gndy/dyzz/index.html';

request(url, function (err, data, body) {
    var $ = cheerio.load(data.body);
    var title = [];
    $('.ulink').each((index, e) => {
        title.push('https://www.ygdy8.net' + $(e).attr('href'))
    })
    let link = [];
    for (let i = 0; i < 2; i++){
        request('https://www.ygdy8.net/html/gndy/dyzz/20190629/58759.html',function(err,data){
            var $1 = cheerio.load(data.body);
            $1('#Zoom span table tbody tr td').each((index,e)=>{
                // link.push()
                console.log($1(e))
            })
            console.log(body)
        })
    }
})
