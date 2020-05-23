/*
 * @Author: your name
 * @Date: 2020-05-23 19:58:53
 * @LastEditTime: 2020-05-23 22:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mycli\lib\inquirer.js
 */

const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "请输入你的git账号或邮箱地址:",
        validate: (value) => {
          if (value.length) {
            return true;
          } else {
            return "请输入你的git账号或邮箱地址.";
          }
        },
      },
      {
        name: "password",
        type: "password",
        message: "请输入你的密码:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "请输入你的密码.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
