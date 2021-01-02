import tpl from "./info.tpl";

const oApp = document.querySelector("#app");

const info = tpl({
  name: "许嵩",
  age: 34,
  career: "歌手",
  hobbies: "旅行",
});

oApp.innerHTML = info
