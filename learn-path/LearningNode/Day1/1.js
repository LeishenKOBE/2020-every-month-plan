let events = require("events");

let myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function (message) {
  console.log(message);
});

myEmitter.emit("someEvent", "许嵩");
