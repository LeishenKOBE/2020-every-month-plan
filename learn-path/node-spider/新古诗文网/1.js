const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.gushiwen.org/";
request(
  {
    url,
    method: "get",
  },
  (err, res, body) => {
    const $ = cheerio.load(body);
    const left = $(".main3 .left .sons .cont").text();
    console.log(left);
  }
);
