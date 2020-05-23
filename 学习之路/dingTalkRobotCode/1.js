/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * 
 * @Author: shdongzhao
 * @Date: 2020-05-21 16:39:20
 * @LastEditors: shidongzhao
 * @LastEditTime: 2020-05-21 18:12:14
 * @Description: 
 */
const Robot = require("dingtalk-robot-sdk")
const robot = new Robot({
    accessToken: 'b386b2008b69e98cbb3f14235b058f0adc29c17a55a6dec64dd6abef8bdf658e',
    secret: 'SEC662eab928173979600e6b91e25433eacb28e6e3b63205f7ff471728685b463ac',
});

const ActionCard = Robot.ActionCard;
const actionCard = new ActionCard();
actionCard.setTitle("乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身")
    .setText(`![screenshot](@lADOpwk3K80C0M0FoA)
### 乔布斯 20 年前想打造的苹果咖啡厅
Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`)
    .setHideAvatar(1).setBtnOrientation(1)
    .setSingleTitle("阅读全文")
    .setSingleURL("https://www.dingtalk.com/");
robot.send(actionCard)