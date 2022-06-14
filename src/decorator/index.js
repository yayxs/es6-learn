
function foo(flag){
  return function(target){
    target.flag = flag
  }
}

// @foo(true)
// class MyClass {

// }
// MyClass.flag



/**
 * 方法的装饰
 */

class Person{
  // @readonly
  // name(){
  //   console.log('name');
  // }
}

console.log('decorator run');