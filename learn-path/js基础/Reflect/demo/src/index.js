const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Reflect.has(duck, "color"));
console.log(Reflect.ownKeys(arr));
Reflect.set(duck, "eyes", "black");
console.log(duck);
