// 在类电商类项目，往往存在大量的图片，如 banner 广告图，菜单导航图，美团等商家列表头图等。图片众多以及图片体积过大往往会影响页面加载速度，造成不良的用户体验，所以进行图片懒加载优化势在必行。
//实现一个图片懒加载指令，只加载浏览器可见区域的图片
// 思路:
// 1. 图片懒加载的原理主要是判断当前图片是否到了可视区域这一核心逻辑的实现
// 2. 拿到所有图片的dom，遍历每个图片判断当前图片是否到了可视区域
// 3. 如果到了就设置图片src的属性，否则就展示默认图片

// 图片懒加载有两种实现方式，一是绑定scroll事件进行监听，二是使用IntersectionObserver实现懒加载，否则则使用scroll事件监听+节流的方法实现
const lazyload = {
  install(Vue, options) {
    const defaultSrc = options.default;
    Vue.directive("lazy", {
      bind(el, binding) {
        lazyload.init(el, binding.value, defaultSrc);
      },
      inserted(el) {
        if (IntersectionObserver) {
          lazyload.observe(el);
        } else {
          lazyload.listenerScroll(el);
        }
      },
    });
  },
  init(el, val, def) {
    el.setAttribute("data-src", val);
    el.setAttribute("src", def);
  },
  observe(el) {
    let io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src;
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc;
          el.removeAttribute("data-src");
        }
      }
    });
    io.observe(el);
  },
  listenerScroll(el) {
    const handler = lazyload.throttle(lasyload.load, 300);
    lasyload.load(el);
    window.addEventListener("scroll", () => {
      handler(el);
    });
  },
  load(el) {
    const windowHeight = document.documentElement.clientHeight;
    const elTop = el.getBoundingClientRect().top;
    const elBtm = el.getBoundingClientRect().bottom;
    const realSrc = el.dataset.src;
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc;
        el.removeAttribute("data-src");
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer;
    let prevTime;
    return function(...args) {
      const currTime = Date.now();
      const context = this;
      if (!prevTime) prevTime = currTime;
      clearTimeout(timer);
      if (currTime - prevTime > delay) {
        prevTime = currTime;
        fn.apply(context, args);
        clearTimeout(timer);
        return;
      }
      timer = setTimeout(function() {
        prevTime = Date.now();
        timer = null;
        fn.apply(context, args);
      }, delay);
    };
  },
};

export default lazyload;
