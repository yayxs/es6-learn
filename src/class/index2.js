function PointType(x, y) {
  this.x = x
  this.y = y
}

PointType.prototype.toString = function () {
  return '(' + this.x + this.y + ')'
}

const p = new PointType(1, 2)

/**
 *
 */

class PointClass {
  // constructor 构造方法
  constructor(x, y) {
    // this 实例对象
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + this.y + ')'
  }
}

const type = typeof PointClass
const ans = PointClass === PointClass.prototype.constructor

class B {}

const b = new B()

console.log(b.constructor === B.prototype.constructor)

/**
 * 类内部方法不可枚举
 */
class Point {
  constructor() {}

  toString() {}
}

/**
 *
 */

class ConstructorClass {
  constructor() {
    // return this  // 默认返回this
    // return Object.create(null)
  }
}

new ConstructorClass() instanceof ConstructorClass

/**
 * 自有属性
 */

class OwnClass {
  constructor(x, y) {
    // 显示定义this
    this.x = x
    this.y = y
  }

  toString() {
    return this.x + this.y
  }
}

const point = new OwnClass(2, 3)

const hasX = point.hasOwnProperty('x') // 实例对象的自有属性

const hasToString = point.hasOwnProperty('toString') // 原型对象的属性

class ThisClass {
  printName(name = 'default') {
    this.print(name)
  }

  print(t) {
    console.log(t)
  }
}

/**
 * 静态方法
 */

class StaticClass {
  static foo() {
    this.bar()
  }
  static bar() {
    console.log('bar')
  }
}
StaticClass.foo()

/**
 * 实例属性的新写法
 */

class Counter {
  // constructor(){
  //   this._count = 0
  // }
  _count = 0
  get value() {
    return this._count
  }
}

/**
 * 私有方法和私有属性
 */

/**
 * in 运算符
 */

class A {
  use(obj) {
    try {
    } catch (error) {}
  }
}

/**
 * new.target
 */

/**
 * class 的继承
 */
class FatherClass {}

class SonClass extends FatherClass {
  constructor(x, y, color) {
    // super 代表父类的构造函数
    super(x, y) // 调用父类的构造器
    // 子类自己的this对象 必须先通过父类的构造函数完成塑造
    this.color = color
  }

  toString() {
    return this.color + super.toString() // 调用父类的toString
  }
}

/**
 * [q] 为什么子类的构造函数，一定要调用super()
 */

class Foo {
  constructor() {
    console.log(1)
  }
}

class Bar extends Foo {
  constructor() {
    super()
    console.log(2)
  }
}

const bar = new Bar()

/**
 * [q] 子类上获取父类
 */

class Parent {
  constructor() {}
}

class Son extends Parent {}

// ans = Object.getPrototypeOf(Son) === Parent

/**
 * [q] super 关键字
 */

class AClass {
  constructor() {
    console.log(new.target.name)
  }
}

class BClass extends AClass {
  constructor() {
    super() // 调用
  }
}

console.log('class 2 run')
