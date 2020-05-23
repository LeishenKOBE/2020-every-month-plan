/*
 * @Author: your name
 * @Date: 2020-05-22 01:59:32
 * @LastEditTime: 2020-05-22 02:19:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dingTalkRobotCode\西窗烛.js
 */

const request = require("request");

const url = "https://avoscloud.com/1.1/call/getHotAuthors";
const params = {};
const headers = {
  authority: "avoscloud.com",
  method: "POST",
  path: "/1.1/call/getHotAuthors",
  scheme: "https",
  accept: "*/*",
  "accept-encoding": "UTF-8",
  "accept-language": "zh-CN,zh;q=0.8",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  origin: "http://lib.xcz.im",
  referer: "http://lib.xcz.im/nav-author",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER",
  "x-lc-id": "9pq709je4y36ubi10xphdpovula77enqrz27idozgry7x644",
  "x-lc-prod": "0",
  "x-lc-sign": "ffed0d33b5a161492c4474f6c314311c,1590084044501",
  "x-lc-ua": "LeanCloud-JS-SDK/3.13.2 (Browser)",
};
request(
  {
    url,
    method: "POST",
    json: true,
    body: params,
    headers,
    encoding: null,
  },
  (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(body);
  }
);
