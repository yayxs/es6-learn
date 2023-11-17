/**
 * 弱映射
 * 集合类型
 * 增强的键值对的存储机制
 * weak 描述的js 垃圾回收程序 弱映射 中键的方式
 * 弱弱的拿着
 * key 只能是 object 类型
 * 
 */

/** 实例化空的 */
const wm = new WeakMap()
const targetMap = new WeakMap()

const key1 = { id: 'key1' } // 对象的key
const key2 = { id: 'key2' }
const key3 = { id: 'key3' }

const wm1 = new WeakMap([
  [key1, 'key1'],
  [key2, 'key2'],
  [key3, 'key3']
])

// const wm2 = new WeakMap([
//   ['badkey','123']
// ])

const wm3  = new WeakMap()

wm3.set({},'val') // 没有指向对象的其他引用 代码执行后

const wm4 = new WeakMap()

const container = {
  key:{}
}

wm4.set(container.key,val)

function removeRef(){
  container.key = null // 移除引用
}

/**
 * 实现私有变量
 */
class User {
  constructor(id){
    this.idProperty = Symbol('id')
    this.setId(id)
  }
  setPri(p,value){
    // const mebers = 
  }
}