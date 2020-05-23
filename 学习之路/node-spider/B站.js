const request = require('request')

request({
    url: 'https://api.bilibili.com/x/web-interface/view?aid=92625098'
}, function (err, res) {
    console.log(res.body)
})