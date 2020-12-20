// 装饰器模式
@testable
class MyTestableClass{

}

function testable(target){
    target.isTestable = true;
}
console.log(MyTestableClass.isTestable)