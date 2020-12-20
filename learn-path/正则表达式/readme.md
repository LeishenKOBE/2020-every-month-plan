# 正则表达式

## 规则

1. [0-9] 匹配单个数字 0-9
2. [a-z] 匹配小写字母
3. [A-Z] 匹配大写字母
4. \n 匹配所有换行符
5. \b 匹配边界如字符之间的空格
6. ^ (1) 匹配输入字符串开始的位置 (2) 用在[]中时表示非
7. \$ 匹配输入字符串的结束位置
8. | 二选一，表示或
9. \. 小数点匹配换行符\n 之外的任何单个字符
10. [] 中括号匹配一个字符
11. ()小括号表示一个子表达式分组
12. {} 大括号表示限定一个表达式多次
13. \+ 匹配前面的子表达式一次或多次
14. \* 匹配前面的表达式零次或多次
15. ? (1) 匹配前面的子表达式零次或一次 (2) 指明一个非贪婪限定符
16. \d 表示 0-9，表示的是一个数字
17. \D 表示除数字外的任意字符
18. \w 表示数字，大小写字母和下划线
19. \W 表示非单词字符
20. \s 表示空白字符
21. \S 表示非空白字符
22. .是通配符，表示任意字符
    如果要匹配任意字符，可以使用[\d\D],[\w\W],[\s\S]和[^]任意一种

量词的简写形式

1. {m,}表示至少出现 m 次
2. {m}表示出现 m 词
3. ?表示不出现或者出现 1 次
4. +表示至少出现 1 次
5. \*表示出现任意次

JS 中的正则表达式分为字面量和构造函数两种

```javascript
// 字面量
const reg = /[0-9a-z]/g;
// 构造函数
const reg = new RegExp("[0-9a-z]", "g");
```

其中字面量中不可以使用变量，构造函数中可以使用

```javascript
const name = "许嵩";
const reg = new RegExp(`我的名字叫${name}`);
```

经常会用 reg.test(str) 方法来判断字符串中是否匹配到了正则表达式：

```javascript
const reg = /[0-9]/
const str = '文本中有没有数字1234等'
if (reg.test(str)) {
  ...
}

```

也经常用 str.replace(reg, '') 方法来替换字符串中的内容：

```javascript
const reg = /[0-9]/g;
const str = "文本中的数字1234全部替换成x";
const newStr = str.replace(reg, "x");
```

也会用到 str.match(reg) 方法来获取匹配到的内容（也可以用 reg.exec(str)）：

```javascript
const reg = /[0-9]+[.][0-9]+[.][0-9]+/g;
const str = "这里有个表名字叫做 11.11.11";
str.match(reg); // ['11.11.11']
```

- match 中的正则表达式如果使用 g 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。

- 如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。

### 贪婪与非贪婪

\*和+限定符都是贪婪的，他们会尽可能多的匹配文字。在他们的后面加上一个?就可以实现非贪婪或最小匹配

- 贪婪（默认都是贪婪的）

```javascript
const str = "<h1>正则表达式</h1>";
const reg = /<.*>/;
str.match(reg); // ['<h1>正则表达式</h1>']
```

- 非贪婪

```javascript
const str = "<h1>正则表达式</h1>";
const reg = /<.*?>/;
str.match(reg); // ['<h1>']
```

## 捕获分组和回溯引用

小括号()匹配到的子表达式会被缓存为一个个组，方便后面对其引用。假设要捕获 html 中的 h1 标签：

- 在正则表达式中使用\n 可以引用第 n 个捕获组

```javascript
const str = "<p>正则表达式</p><h1>正则表达式</h1><h2>正则表达式</h2>";
const reg = /<(h1)>.+?<\/\1>/;
str.match(reg); // ['<h1>正则表达式</h1>']
```

- 在正则表达式外引用$n引用第n个捕获组（RegExp.$n）

```javascript
const str = "abc";
const reg = /(abc)/;
RegExp.$1; // 'abc'
str.replace(reg, "$1$1"); // 'abcabc'
```

## 非捕获组和限定查找

因为捕获组()会将每个捕获到的结果缓存下来以便引用，所以会造成内存使用增加。如果只是想用分组的原始功能，而不需要缓存，则可以使用非捕获分组(?:)

```javascript
const str = "abc";
const reg = /(?:abc)/;
RegExp.$1; // ''
```

非捕获分组还有 (?=)、(?<=)、(?!)、(?<!) ，他们比 (?:) 多了限定作用，即只匹配而不会被输出。

## 向前查找

向前查找是用来限制后缀的

1. (?=)：即查找符合限定条件(?=)的前面的匹配项（输出内容不包括(?=)中的匹配项）

```javascript
const str = "a.png b.jpg c.gif d.svg";
// 查找所有 边界开头的、 .svg 前面的 小写字母。
const reg = /\b[a-z](?=.svg)/g;
str.match(reg); // ['d']
```

2. (?!)：即查找不符合限定条件(?!)的前面的匹配项(输出内容不包括(?!)中的匹配项)

```javascript
const str = "a.png b.jpg c.gif d.svg";
// 查找所有边界开头的、 非.svg 前面的、 `.[a-z]{3}` 前面的 小写字母。
const reg = /\b[a-z](?!.svg)(?=\.[a-z]{3})/g;
str.match(reg); // ['a', 'b', 'c']
```

## 后向查找

后向查找是用来限制前缀的

1. 查找符合限定条件(?<=)的后面的匹配项（输出内容不包括(?<=)中的匹配项）

```javascript
const str = "1. 1111； 2. 2222； 3. 3333； 4. 4444。";
//  查找所有 序号 后面的项。
const reg = /(?<=\b[0-9]+\.\s).+?[；。]/g;
str.match(reg); // ["1111；", "2222；", "3333；", "4444。"]
```

2. 查找不符合限定条件(?<!)的后面的匹配项（输出内容不包括(?<!)中的匹配项）

```javascript
const str = "a.png b.jpg c.gif d.svg";
// 查找前缀不为 a b c 的后面的项
const reg = /\b(?<![abc]\.)[a-z]{3}/g;
str.match(reg); // ['svg']
```

### 前向查找和后向查找齐用：

假设要获取 \<img crossorigin src="https://abcdefg.com" data-img-url="https://test.com"> 中的 data-img-url 属性中的链接。可以确定的是链接左边一定是 data-img-url=" ，右边一定是紧贴着 " （非贪婪）。

```javascript
const str =
  '<img crossorigin src="https://abcdefg.com" data-img-url="https://test.com">';
const dataImgUrl = "data-img-url";
const reg = new RegExp(`(?<=${dataImgUrl}=").+?(?=")`, "g");
str.match(reg); // ['https://test.com']
```

### 回溯引用和非贪婪并用

假如我要获取一段 html 中的文本，但是我又不想要加了 not-show-in-text 标记的标签中的文本，可以这样：

```javascript
const notShowInText = "not-show-in-text";
const html = `
  <p>test1</p>
  <p ${notShowInText} style="text-align: center;">
    <b>表 1.4.4 测试表格</b>
  </p>
  <p>test2</p>
`;
const reg = new RegExp(
  `<([a-z][a-z1-6]*?)[^>]+${notShowInText}[\\s\\S]+?</\\1>`,
  "g"
);
const text = html.replace(reg, "").replace(/<[^>]+>/g, "");
```

其中最关键的是要匹配到 not-show-in-text 所在的整个标签。([a-z][a-z1-6]\*?) 匹配了一个非贪婪的标签名，[^>] 保证了 < 到 > 是一个半个完整的标签，</\\1> 匹配一个闭合的标签， [\\s\\S]+? 匹配了标签见可能出现的任意元素且是非贪婪的。

## replace 第二个参数可以是回调函数

比如，想把 yyyy-mm-dd 格式，替换成 mm/dd/yyyy 怎么做？

```javascript
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, "$2/$3/$1");
console.log(result); // "06/12/2017"
```

其中 replace 第二个参数里用$1、$2、\$3 指代相应的分组。等价于如下的形式：

```javascript
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function () {
  return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
});
console.log(result); // "06/12/2017"
```

也等价于：

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function (match, year, month, day) {
  return month + "/" + day + "/" + year;
});
console.log(result); // "06/12/2017"
```
