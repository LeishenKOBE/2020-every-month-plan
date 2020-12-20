// 长按功能
// 1. 创建一个定时器，2秒后执行函数
// 2. 当用户按下按钮时触发mousedown事件，启动定时器，用户松开按钮时调用mouseout事件
// 3. 如果mouseup事件2秒内触发，就清除定时器，当做一个普通的点击事件
// 4. 如果计时器没有在2秒内被清除，则判定为一次长按，可以执行关联的函数
// 5. 在移动端要考虑touchstart,touceend

const longpress = {
  bind(el, binding, vNode) {
    console.log(el, binding, vNode);
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    let pressTimer = null;
    let start = (e) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler();
        }, 500);
      }
    };
    let cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    const handler = (e) => {
      binding.value(e);
    };
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);

    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    el.removeEventListener("click", el.handler);
  }
};

export default longpress;
