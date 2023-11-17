class A {
  constructor(name) {
    console.log('a this', this)
    this.name = name
  }
}

class B extends A {
  constructor() {
    // 子类构造函数中使用super
    // 子类有con 父类有con
    // console.log('b this', this)
    // 确保父类的初始化逻辑执行
    super()
  }
}

const b1 = new B()
