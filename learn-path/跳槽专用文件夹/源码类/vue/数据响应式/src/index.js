import { observe } from "./observe";

let obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 10,
  c: {
    d: {
      e: {
        f: 20,
      },
    },
  },
  g: [1, 2, 3, 4, 5],
};

observe(obj);

obj.g.splice(1, 2);
obj.b = 20
console.log(obj.g);
