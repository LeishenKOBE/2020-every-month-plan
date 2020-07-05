/*
 * @Author: your name
 * @Date: 2020-05-21 22:39:30
 * @LastEditTime: 2020-05-22 17:52:19
 * @LastEditors: shidongzhao
 * @Description: In User Settings Edit
 * @FilePath: \dingTalkRobotCode\苏轼.js
 */
const cheerio = require("cheerio");
const request = require("request");
const iconv = require("iconv-lite");
const fs = require("fs")

const url = "https://avoscloud.com/1.1/call/getWorksByAuthor";
const params = {
  authorId: "57ad1badc4c9710054676d9d",
  page: 2,
  perPage: 20,
};
const headers = {
  authority: "avoscloud.com",
  method: "POST",
  path: "/1.1/call/getWorksByAuthor",
  scheme: "https",
  accept: "*/*",
  "accept-encoding": "UTF-8",
  "accept-language": "zh-CN,zh;q=0.8",
  "content-length": "61",
  "content-type": "application/json;charset=UTF-8",
  origin: "http://lib.xcz.im",
  referer: "http://lib.xcz.im/author/57ad1badc4c9710054676d9d",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER",
  "x-lc-id": "9pq709je4y36ubi10xphdpovula77enqrz27idozgry7x644",
  "x-lc-prod": "0",
  "x-lc-sign": "8dabb2d9fdfee45b1bc292b23db2f4d4,1590071690417",
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
