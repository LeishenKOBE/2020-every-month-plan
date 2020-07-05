/*
 * @Author: shdongzhao
 * @Date: 2020-05-03 21:06:55
 * @LastEditors: shidongzhao
 * @LastEditTime: 2020-05-03 21:10:30
 * @Description: 
 */
const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

let transporter = nodemailer.createTransport({
    service: 'qq',
    secureConnection: true,
    auth:{
        user:'963954711@qq.com',
        pass:''
    }
})
