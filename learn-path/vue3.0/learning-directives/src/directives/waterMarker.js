// 需求：给整个页面添加背景水印
// 使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
// 将其设置为背景图片，从而实现页面或组件水印效果

function addWaterMarker(str, parentNode, font, textColor) {
  var can = document.createElement("canvas");
  parentNode.appendChild(can);
  can.width = 200;
  can.height = 150;
  can.style.display = "none";
  let ctx = can.getContext("2d");
  ctx.rotate((-20 * Math.PI) / 180);
  ctx.font = font || "16px Microsoft JhengHei";
  ctx.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  ctx.textAlign = "left";
  ctx.textBaseline = "Middle";
  ctx.fillText(str, can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
}

const waterMarker = {
  bind(el, binding) {
    addWaterMarker(
      binding.value.text,
      el,
      binding.value.font,
      binding.value.textColor
    );
  },
};

export default waterMarker;
