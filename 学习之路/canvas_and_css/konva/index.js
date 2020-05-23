// var stage = new Konva.Stage({
//   container: "container",
//   width: window.innerWidth,
//   height: window.innerHeight
// });
// var layer = new Konva.Layer();
// stage.add(layer);

// var rect = new Konva.Rect({
//   x: 0,
//   y: 0,
//   width: 100,
//   height: 100,
//   fill: "red",
//   draggable: true
// });
// var line = new Konva.Line({
//   points: [100, 100, 200, 200],
//   stroke: "#000",
//   tension: 1,
//   draggable: true,
//   strokeWidth: 6
// });
// line.on("dragend", function(e) {
//   console.log(e);
// });
// line.on("mouseover", function() {
//   document.body.style.cursor = "pointer";
// });
// line.on("mouseleave", function() {
//   document.body.style.cursor = "default";
// });

// layer.add(line);
// layer.add(rect);
// layer.draw();
var stage = new Konva.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight
});

var layer = new Konva.Layer();

stage.add(layer);

// var circle = new Konva.Circle({
//   x: stage.width() / 2,
//   y: stage.height() / 2,
//   radius: 70,
//   fill: "red",
//   stroke: "black",
//   strokeWidth: 4,
//   draggable: true
// });

// circle.on("dragstart", function() {
//   var a = circle.clone();
//   a.attrs.draggable = false;
//   layer.add(a)
//   layer.draw();
// });
// circle.on('drag')
// layer.add(circle);
var hexagon = new Konva.RegularPolygon({
  x: stage.width() / 2,
  y: stage.height() / 2,
  sides: 6,
  radius: 20,
  fill: "red",
  stroke: "black",
  strokeWidth: 4
});

layer.add(hexagon);

var amplitude = 100;
var period = 2000;
// in ms
var centerX = stage.width() / 2;
var centerY = stage.height() / 2;
var anim = new Konva.Animation(function(frame) {
  hexagon.x(
    amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
  );
  hexagon.y(
    amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerY
  );
}, layer);

anim.start();
layer.draw();
