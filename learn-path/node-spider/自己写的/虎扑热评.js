const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
let baseUrl = "https://bbs.hupu.com";
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
};

let liangping = []

fs.readFile("hupu.json", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    var str = res.toString();
    var obj = JSON.parse(str);
    for (let i = 0; i < obj.length; i++) {
        request({
            url:obj[i]["链接"],
            headers:headers,
            method:"GET"
        },function(err,res){
            if(err){
                console.log(err)
            }else{
              //   console.log(res.body)
              var $ = cheerio.load(res.body);
              $('.floor .floor_box .case tbody tr td').each(function(index,e){
                  liangping.push($(e).text())
              })
              console.log(liangping) 
            }
        })
    }
    
  }
});
