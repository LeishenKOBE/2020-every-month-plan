const request = require("request");

request(
  {
    url: "https://extension-ms.juejin.im/resources/github",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER",
      referer: "https://e.xitu.io/",
      Host: "extension-ms.juejin.im"
    },
    method: "POST",
    data: {
      category: "trending",
      lang: "javascript",
      limit: 30,
      offset: 0,
      period: "day"
    }
  },
  function(err, res) {
    if (err) {
      console.log(err);
    } else {
      let str = res.body;
      //   let json1 = JSON.parse(str);
      console.log(str);
    }
  }
);
