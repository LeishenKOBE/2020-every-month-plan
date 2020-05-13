// const numberMap = new Map();

// numberMap.set(1, "one");
// numberMap.set(2, "two");
// console.log([...numberMap.keys()]);
const colorsMap = new Map();
colorsMap.set("white", "#fff");
colorsMap.set("black", "#000");
for (const [color, hex] of colorsMap) {
  console.log(color + "=>" + hex);
}
console.log(colorsMap.keys());
