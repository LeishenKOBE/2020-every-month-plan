/*
 * @Author: your name
 * @Date: 2020-05-23 19:58:47
 * @LastEditTime: 2020-05-23 20:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mycli\lib\file.js
 */

const fs = require("fs");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
};
