// let a: number = 100;
// let b: string = "许嵩";
// console.log(a, b);
// void类型
// function printVoid(): void {
//   console.log(111);
// }
// printVoid()
// 类型断言
function fn(paprams) {
    if (typeof paprams === "string") {
        return paprams.length;
    }
    else {
        return paprams.toString().length;
    }
}
