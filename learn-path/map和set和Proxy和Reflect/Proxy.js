function proxy_bind(target) {
  return new Proxy(target, {
    get(target, prop) {
      console.log("this is get method");
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      document.getElementById("show_input").innerHTML = value;
      return;
    },
  });
}

let obj_bind = proxy_bind(obj);

function inputhandler(obj) {
  obj_bind.name = obj.name
}

let obj = {
  name: "许嵩",
};

console.log(obj_bind.name);
