function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(getValue({ a: 1 }, "a"))
