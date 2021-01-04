function Ninja() {
  this.name = "NINJA";
}

var ninjaA = Ninja(),
  ninjaB = new Ninja();
console.log(typeof ninjaA, typeof ninjaB);
