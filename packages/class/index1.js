// -------------------------------------- 深入理解es6

/** es 5 中的仿类结构 */

/**
 * 创建一个自定义类型
 * PersonType 构造器函数
 */

function PersonType(name) {
  this.name = name
}

PersonType.prototype.sayName = function () {
  console.log(this.name)
}

const p = new PersonType('v')

p.sayName()

console.log(p instanceof PersonType)
console.log(p instanceof Object)

/**
 * 简单的类声明
 * constructor 方法名称直接定义一个构造器
 */

class PersonClass {
  // 等价于 PersonType 的构造器
  constructor(name) {
    // name 自有属性 实例上而非原型上
    // 创建所有可能的自有属性
    this.name = name
  }

  //
  sayName() {
    console.log(this.name)
  }
}

/**
 * 类语法
 */

let PersonType2 = (function () {
  'use strict'
  const PersonType2 = function (name) {
    if (typeof new.target === 'undefined') {
      throw new Error('')
    }
    this.name = name
  }

  return PersonType2
})()

/**
 * 访问器属性
 */

class CusHtml {
  constructor(element) {
    // 自有属性
    this.element = element
  }

  get html() {
    return this.element.innerHTML
  }
  set html(value) {
    this.element.innerHTML = value
  }
}

const desc = Object.getOwnPropertyDescriptor(CusHtml.prototype, 'html')

console.log('get' in desc)

console.log('set' in desc)

/**
 * 需要计算的成员名称
 */

const methodName = 'sayName'

class PersonClassCopy {
  // 自有属性
  constructor(name) {
    this.name = name
  }

  get [methodName]() {
    return this.name
  }
}

/**
 * 生成器属性
 */

class MyClass {
  *createIterator() {
    yield 1
    yield 2
    yield 3
  }
}

const instance = new MyClass()

const i = instance.createIterator()

/**
 * 类的默认迭代器
 */

class Collection {
  constructor() {
    this.items = []
  }

  *[Symbol.iterator]() {
    yield* this.items.values()
  }
}

const c = new Collection()

c.items.push(1)
c.items.push(2)
c.items.push(3)

for (const iterator of c) {
  console.log(iterator)
}

/**
 * 静态成员
 */

class PersonClassStatic {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }

  static create(name) {
    return new PersonClassStatic(name)
  }
}

/**
 * es6之前的继承
 */

function FatherType(len, width) {
  this.len = len
  this.width = width
}

FatherType.prototype.getArea = function () {
  return this.width * this.len
}
function Square(len) {
  FatherType.call(this, len, len)
}

Square.prototype = Object.create(FatherType.prototype, {
  constructor: {
    value: Square
  }
})

/**
 * extends
 */

class ChangClass {
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  getArea() {
    return this.length * this.width
  }
}

/**
 * ZhengClass 为派生类
 * derived classes
 */

class ZhengClass extends ChangClass {
  // ZhengClass 构造器中使用 super 配合指定参数 调用 父类的构造器
  constructor(length) {
    super(length, length)
  }
}

class FatherClass {
  constructor(name) {
    console.log('name', name)
    this.name = name
  }
}

class SonClass extends FatherClass {
  constructor(...args) {
    console.log(args)
    // super 派生类中使用
    // console.log(this)
    super(...args) // 负责初始化this
    console.log(this)
  }
}

const s = new SonClass('son')

class TargetClass {
  constructor(length, width) {
    console.log(new.target === TargetClass)
  }
}

const t = new TargetClass()

// -----------------es6标准入门

console.log('class run')
