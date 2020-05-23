/*
 * @Author: shdongzhao
 * @Date: 2020-05-22 10:21:56
 * @LastEditors: shidongzhao
 * @LastEditTime: 2020-05-22 10:22:59
 * @Description:
 */

const request = require("request");

const url = "http://www.weather.com.cn/weather/101010100.shtml";
request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  console.log(body);
});
