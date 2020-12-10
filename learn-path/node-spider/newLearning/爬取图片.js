const http = require("http");
const cheerio = require("cheerio");
const download = require("download");

http
  .request("http://web.itheima.com/teacher.html#ajavaee", (res) => {
    let chunks = [];
    res.on("data", (chunk) => {
      chunks.push(chunk);
    });
    res.on("end", () => {
      let htmlStr = Buffer.concat(chunks).toString("utf-8");
      const $ = cheerio.load(htmlStr);
      const imgs = [];
      $(".clears li .main_pic img").each((index, elem) => {
        imgs.push("http://web.itheima.com/" + encodeURI($(elem).attr("src")));
      });
      Promise.all(imgs.map(x => download(x, "dist"))).then(() => {
        console.log("结束了");
      });
    });
  })
  .end();
