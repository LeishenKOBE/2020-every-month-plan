const request = require("request");

request(
  {
    url: "https://api.bilibili.com/x/web-interface/dynamic/region?ps=12&rid=36",
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
    },
  },
  function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  }
);
