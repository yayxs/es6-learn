// 使用class 定义类
class Animal {
  // 构造函数
  constructor(name) {
    this.name = name
  }
  // 方法
  makeSound() {
    console.log('some sound')
  }
}

// 类的实例化
const myAnimal = new Animal('bob')
myAnimal.makeSound() // 输出
console.log(myAnimal.name)

// 类的继承
class Dog extends Animal {
  constructor(name, son) {
    // console.log('super 1', this)
    super(name) // 调用父类的构造函数
    console.log('super 2', this)
    this.son = son
  }
  // 子类的方法
  bark() {
    console.log('woof')
  }
}

const myDod = new Dog('aba', 'aaaaaa')

console.log(myDod)
