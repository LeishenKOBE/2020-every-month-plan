// @testdeclare
// class MyTestableClass {}

// function testdeclare(target) {
//   target.isTestable = true;
// }

// console.log(MyTestableClass.isTestable)

import { mixins } from "./mixins";
const Foo = {
  foo() {
    console.log("foo");
  },
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo();
