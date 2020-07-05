class Star {
  constructor(username) {
    this.username = username;
  }
  say() {
    return 1;
  }
  sing() {
    let a = this.say();
    console.log(a);
  }
}
let a = new Star();

a.sing();
