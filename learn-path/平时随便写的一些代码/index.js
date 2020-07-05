const request = require("request");

// 熊猫办公配乐：https://www.tukuppt.com/peiyue/
// 熊猫办公音效：https://www.tukuppt.com/yinxiao/
const baseUrl = 'http://tool.vast.codes/panda/?url='

request(baseUrl+'https://www.tukuppt.com/muban/xpondabv.html',function(err,res){
    if(err){
        console.log(err)
    }
    console.log(res.body)
})
