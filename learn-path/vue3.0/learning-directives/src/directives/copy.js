// 一键复制文本内容，用于鼠标右键粘贴
// 思路：
// 1. 动态创建textarea标签，并设置readOnly属性并移出可视区域
// 2. 将要复制的值赋给textarea标签的value属性，并插入到body
// 3. 选中值textarea并复制
// 4. 将body中插入的textarea移除
// 5. 在第一次调用时绑定事件，在解除时移除事件

const copy = {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        console.log("无复制内容");
        return;
      }
      const textarea = document.createElement("textarea");
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        console.log("复制成功");
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener("click", el.handler);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};

export default copy;
