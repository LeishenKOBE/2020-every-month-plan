import { createApp, createRenderer } from "vue";
import App from "./App.vue";
import CanvasApp from "./CanvasApp.vue";
import "./index.css";

createApp(App).mount("#app");

// 自定义渲染器
const nodeOps = {
  createElement(tag) {
    // 处理元素的创建逻辑
    return { tag };
  },
  insert(child, parent, anchor) {
    // 处理元素的插入逻辑
    child.parent = parent;
    if (!parent.childs) {
      parent.childs = [child];
    } else {
      parent.childs.push(child);
    }

    if (parent.nodeType === 1) {
      draw(child);
      if (child.onClick) {
        canvas.addEventListener("click", () => {
          child.onClick();
          setTimeout(() => {
            draw(child);
          }, 0);
        });
      }
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    // 属性更新
    el[key] = nextValue;
  },
};

const renderer = createRenderer(nodeOps);

let ctx, canvas;

const draw = (el, noClear) => {
  if (!noClear) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (el.tag === "piechart") {
    let { data, r, x, y } = el;
    let total = data.reduce((memo, current) => memo + current.count, 0);
    let start = 0,
      end = 0;
    data.forEach((item) => {
      end += (item.count / total) * 360;
      drawPieChart(start, end, item.color, x, y, r);
      drawPieChartText(item.name, (start + end) / 2, x, y, r);
      start = end;
    });
  }
  el.childs && el.childs.forEach((child) => draw(child, true));
};

const d2a = (n) => {
  return (n * Math.PI) / 180;
};

const drawPieChart = (start, end, color, cx, cy, r) => {
  let x = cx + Math.cos(d2a(start)) * r;
  let y = cy + Math.sin(d2a(start)) * r;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(x, y);
  ctx.arc(cx, cy, r, d2a(start), d2a(end), false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
const drawPieChartText = (val, position, cx, cy, r) => {
  ctx.beginPath();
  let x = cx + (Math.cos(d2a(position)) * r) / 1.25 - 20;
  let y = cy + (Math.sin(d2a(position)) * r) / 1.25;
  ctx.fillStyle = "#000";
  ctx.font = "20px 微软雅黑";
  ctx.fillText(val, x, y);
  ctx.closePath();
};

function createCanvasApp(newApp) {
  const app = renderer.createApp(newApp);
  const mount = app.mount;
  app.mount = function (selector) {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    // 设置画布的基础属性
    canvas.width = 600;
    canvas.height = 600;
    document.querySelector(selector).appendChild(canvas);

    // 执行默认的mount行为
    mount(canvas);
  };
  return app;
}

createCanvasApp(CanvasApp).mount("#demo");
