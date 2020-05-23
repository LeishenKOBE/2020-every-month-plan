/*
 * @Description: 
 * @Author: 石东昭
 * @Date: 2020-01-27 11:01:00
 * @LastEditors: 石东昭
 * @LastEditTime: 2020-01-27 11:03:23
 */
const request = require("request");
const cheerio = require("cheerio");
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER",
  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  Origin: "https://investment.my089.com",
  Referer: "https://investment.my089.com/credit/listForSuccessCredit"
};
request.cookie(
  "SSID=68ADC61E9EA0C185D3AAF2D4A456EB8581919928E14CE9BD16112FADF09A674F5D2AD902C33C8499; UM_distinctid=16a481b89fe752-0b6ec1788dec2b-e323069-1fa400-16a481b89ffbf; Hm_lvt_5ce5533de5645c98a11fba11c6298b1a=1555987926; aliyungf_tc=AQAAALolIwTSBQsAS9lQAbEh5brZWc/H; acw_tc=76b20fe515559879697443050e32a3dd8f599d4348a73d69550303d15f3819; JSESSIONID=A7E80D8450A270A5C2774D747A4A54FF; CNZZDATA1419416=cnzz_eid%3D1946781606-1555983401-https%253A%252F%252Fwww.my089.com%252F%26ntime%3D1555983401; Hm_lpvt_5ce5533de5645c98a11fba11c6298b1a=1555988263"
);
request(
  {
    url: "https://investment.my089.com/credit/listForSuccessCredit",
    method: "POST",
    headers: headers,
    json: {
      datasize: 0,
      subjectStatus: 6,
      totalPage: 100,
      currentPage: 1
    }
  },
  function(err, res) {
    console.log(res.body);
  }
);
