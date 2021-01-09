// 匹配颜色值
// let reg = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
// let string = "#ffbbad #Fc01DF #FFF #ffE";
// console.log(string.match(reg));

// 匹配时间 24小时
// let reg = /([0-1][0-9]|[2][0-3]):([0-5][0-9])/;
// console.log(reg.test("23:59"));
// console.log(reg.test("02:07"));

// 匹配id
let reg = /id="[^"]*"/g;
var string = '<div id="container" class="main"></div>';
console.log(string.match(reg)[0]);
