// 开发中表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或者字母
// 使用正则表达式，设计自定义处理表单输入规则的指令，下面以禁止输入表情和特殊字符为例

let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
};

const trigger = (el, type) => {
  const e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};

const emoji = {
  bind(el, binding, vNode) {
    let reg = /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g;
    let $inp = findEle(el, "input");
    el.$inp = $inp;
    $inp.handler = function() {
      let val = $inp.value;
      $inp.value = val.replace(reg, "");
      trigger($inp, "input");
    };
    $inp.addEventListener("keyup", $inp.handler);
  },
  unbind(el) {
    el.$inp.removeEventListener("keyup", el.$inp.handler);
  },
};
export default emoji;
