let templateStr = `
<ul>
    {{#arr}}
        <li>
            <div class="hd">{{name}}的基本信息</div>
            <div class="bd">
                <p>姓名：{{name}}</p>
                <p>性别：{{sex}}</p>
                <p>年龄：{{age}}</p>
            </div>
        </li>
    {{/arr}}
</ul>
`;
let data = {
  arr: [
    { name: "小红", age: 24, sex: "男" },
    { name: "许嵩", age: 34, sex: "男" },
    { name: "石东昭", age: 27, sex: "男" },
  ],
};
const domStr = Mustache.render(templateStr, data);
const div = document.getElementById("app");
div.innerHTML = domStr;
