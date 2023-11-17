class Person {
  /**
   * 类的特殊方法 用于创建和初始化类的实例
   * 使用 new 的时候自动调用
   * 引擎自动执行的
   * @param {*} name
   * @param {*} age
   */
  constructor(name, age) {
    // new 会自动调用 初始化对象
    /**
     * 其中的this 指的是即将被创建的对象
     * 访问和设置即将被创建的对象实例的属性
     */
    this.name = name
    this.age = age
    console.log('person created')
  }
  foo() {
    console.log('foo run')
  }
  bar() {
    console.log('bar run')
  } // not ,
  baz() {
    console.log('baz run ')
  }
}

const p1 = new Person('v-lee', 12)
