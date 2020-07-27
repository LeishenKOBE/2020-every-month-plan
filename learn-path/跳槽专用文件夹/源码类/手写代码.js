// 防抖与节流
function throttle(fn, time) {
  // 设置初始时间
  let pre = 0;
  return () => {
    let now = Date.now();
    if (now - pre > time) {
      fn.apply(this, arguments);
      pre = now;
    }
  };
}

// 防抖

function debounce(fn, time, isNow) {
  // 设置定时器变量
  let timer;
  return () => {
    if (isNow) {
      fn.apply(this, arguments);
      isNow = false;
      return;
    }
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      clearTimeout(timer);
      timer = null;
    }, time);
  };
}
